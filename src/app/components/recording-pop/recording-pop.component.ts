import { Component, Input, OnInit } from '@angular/core';
import {EnsembleService} from 'src/app/services/ensemble.service';

declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Part, Recording } from 'src/app/struct/ensemble';
import { isThisQuarter } from 'date-fns';

@Component({
  selector: 'app-recording-pop',
  templateUrl: './recording-pop.component.html',
  styleUrls: ['./recording-pop.component.scss'],
})
export class RecordingPopComponent implements OnInit {

  @Input() scoreID:number;
  @Input() selectedPart: Part | undefined;

  tempRecord:any;
  recordingCount:number;
  recordingName:string;
  base64:any;

  currentRecording:Recording = {id:0,scoreID:0,partID:0,name:'',base64:''};
  recordings:Recording[] = this.ensembleService.recording;

  audioSrc:any;
  url:any;
  error:any
  recording=false;

  partID:number;



  constructor(private domSanitizer: DomSanitizer,
              public ensembleService:EnsembleService) {
  }
  

  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
    video: false,
    audio: true
    };
    
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }

  /**
  * Will be called automatically.
  */
  successCallback(stream) {
    
    var options = {
    mimeType: "audio/wav",
    numberOfAudioChannels: 1,
    desiredSampRate: 16000,
    };

    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.tempRecord = new StereoAudioRecorder(stream, options);
    this.tempRecord.record();
  }

  /**
  * Stop recording.
  */
  stopRecording() {
    this.recording = false;
    this.tempRecord.stop(this.processRecording.bind(this));
  }

  /**
  * processRecording Do what ever you want with blob
  * @param  {any} blob Blog
  */
  async processRecording(blob) {
    this.url = URL.createObjectURL(blob);    
    console.log("blob: ", blob);
    console.log(" url: ",this.url);
    console.log('view: ', this.tempRecord.view);
    console.log('newRecord: ', this.tempRecord);
    
    this.base64 = await this.blobToBase64(blob) as string;

    // * saving recording *//

    //store recordingID
    this.currentRecording.id= this.recordingCount +1;
    //save scoreID
    this.currentRecording.scoreID= this.scoreID;
    //store partID
    this.currentRecording.partID= this.partID;
    console.log("current recording part id: ",this.currentRecording.partID);
    
    //store name
    this.currentRecording.name='recordingName';
    //store url
    this.currentRecording.base64= this.base64;

    //save
    this.ensembleService.saveRecording("Recordings",this.currentRecording);

    //reset the temporary variable
    this.currentRecording = {id:0,scoreID:0,partID:0,name:'',base64:''};

    //get the new recording count
    this.recordingCount= this.ensembleService.getRecordingsLength();

  }


  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // if there's an error, reject
      reader.onerror = reject;

      reader.onloadend = () => resolve(reader.result);

      reader.readAsDataURL(blob);
      console.log('base64 in function:', reader);
    });

    
  }


  sanitize(url: string) {
    console.log('url: ',url);
    this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
  /**
  * Process Error.
  */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  ngOnInit() {
    if(this.selectedPart){
      this.partID=this.selectedPart.partID;
    }

    this.recordingCount= this.ensembleService.getRecordingsLength();
    console.log("recording Count ngOnInit: ",this.recordingCount);
  }

  }