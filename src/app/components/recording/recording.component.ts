import { Component, Input, OnInit } from '@angular/core';
import {EnsembleService} from 'src/app/services/ensemble.service';

declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Part, Recording } from 'src/app/struct/ensemble';
import { isThisQuarter } from 'date-fns';
import { ModalController } from '@ionic/angular';
import { RecordingConfirmComponent } from '../recordingConfirm/recording-confirm.component';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss'],
})
export class RecordingComponent implements OnInit {

  @Input() scoreID:number;
  @Input() selectedPart: Part | undefined;

  tempRecord:any;
  recordingCount:number;
  newRecordingName:string;
  base64:any;

  currentRecording:Recording = {id:0,scoreID:0,partID:0,name:'',base64:''};
  recordings:Recording[];

  audioSrc:any;
  url:any;
  error:any
  isRecording=false;

  partID:number;

  sound= new Audio;

  start = true;     // flags that you want the countdown to start
  stopIn = 2000;    // how long the timer should run
  stopTime = 0;     // used to hold the stop time
  stop = false;     // flag to indicate that stop time has been reached
  timeTillStop = 0; // holds the display time

  constructor(private domSanitizer: DomSanitizer,
              public ensembleService:EnsembleService,
              private modalCtrl2:ModalController) {
                
              }
              

    ngOnInit() {
    if(this.selectedPart){
      this.partID=this.selectedPart.partID;
    }

    //recording length
    this.recordingCount= this.ensembleService.getRecordingsLength();
    console.log("recording Count ngOnInit: ",this.recordingCount);

    //get recordings by partID
    this.recordings= this.ensembleService.getRecordingByPart(this.scoreID, this.selectedPart.partID);
    console.log('recording in score: ',this.recordings);
    

  }

//play recording of selected recording by part
playRec(recording:Recording){

  if(this.sound){
    this.sound.src=recording.base64;
    this.sound.play();

    console.log("Part ID of the audio played: ",recording.partID);
    console.log("sound playing: ",this.sound);
  }

  else{
    this.sound.pause();
    this.sound.currentTime = 0;
  }

}

  startCountdown(){
    requestAnimationFrame(this.update.bind(this));  // start the countdown
  }

  initiateRecording() {
    this.isRecording = true;

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
    this.isRecording = false;
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
    this.currentRecording.name= this.newRecordingName;
    //store url
    this.currentRecording.base64= this.base64;

    //open recording confirm modal and save there
    this.recordingconfirmModal();

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

  //recording confirm modal
  async recordingconfirmModal() {
    const modal = await this.modalCtrl2.create({
      component: RecordingConfirmComponent,
      componentProps: {currentRecording:this.currentRecording},
      cssClass: 'recordingConfirmModal',
    });
      await modal.present();

  }

//countdown
// main update function
update(timer){

  if(this.start){  // do we need to start the timer
    this.stopTime = timer + this.stopIn; // yes the set the stoptime
    this.start = false;             // clear the start flag
  }
  else{                         // waiting for stop
      if(timer >= this.stopTime){     // has stop time been reached?
        this.stop = true;           // yes the flag to stop
      }
  }

  this.timeTillStop = this.stopTime - timer;      // for display of time till stop
  // log() should be whatever you use to display the time.
  console.log("time: ",Math.floor(this.timeTillStop / 1000) );  // to display in 1/100th seconds

  if(!this.stop){
      requestAnimationFrame(this.update.bind(this)); // continue animation until stop 
  }

  else{
    console.log("countdown end");
    this.initiateRecording();
  }
}



  ngOnDestroy(){
    this.currentRecording = {id:0,scoreID:0,partID:0,name:'',base64:''};
    this.stop= true;
  }

}