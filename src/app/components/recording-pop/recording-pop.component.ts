import { Component, Input, OnInit } from '@angular/core';
import {EnsembleService} from 'src/app/services/ensemble.service';

declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Part, Recording } from 'src/app/struct/ensemble';

@Component({
  selector: 'app-recording-pop',
  templateUrl: './recording-pop.component.html',
  styleUrls: ['./recording-pop.component.scss'],
})
export class RecordingPopComponent implements OnInit {

  @Input() scoreID:number;
  @Input() selectedPart: Part;

  tempRecord:any;
  recordingCount:number;
  recordingName:string;
  currentRecording:Recording = {id:0,partID:0,name:'',urlPath:''};
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
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
    console.log("blob: ", blob);
    console.log("url: ", this.url);
    console.log('view: ', this.tempRecord.view);
    console.log('newRecord: ', this.tempRecord);
    

    // * saving recording *//

    //store recordingID
    this.currentRecording.id= this.recordingCount +1;
    //store partID
    this.currentRecording.partID= this.partID;
    //store name
    this.currentRecording.name='recordingName';
    //store url
    this.currentRecording.urlPath= this.url;

    //save
    this.ensembleService.saveRecording("Recording",this.currentRecording);

    //reset temporary variable
    this.currentRecording = {id:0,partID:0,name:'',urlPath:''};
    this.recordingCount= this.ensembleService.getRecordingsLength();

    console.log("recording count after save: ",this.recordingCount);

  }


  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  
  /**
  * Process Error.
  */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  ngOnInit() {
    console.log("Score id: ",this.scoreID);
    this.partID=this.selectedPart.partID;

    this.recordingCount= this.ensembleService.getRecordingsLength();
    console.log("recording Count ngOnInit: ",this.recordingCount);
    
    
  }

  }