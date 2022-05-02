import { Component, Input, OnInit } from '@angular/core';
import {EnsembleService} from 'src/app/services/ensemble.service';

;
import { DomSanitizer } from '@angular/platform-browser';
import { Part, Recording } from 'src/app/struct/ensemble';
import { ModalController } from '@ionic/angular';


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

  closeModal(){
    this.modalCtrl2.dismiss("recordingClick");
    //requestAnimationFrame(this.update.bind(this));  // start the countdown
  }

  

  ngOnDestroy(){
    this.currentRecording = {id:0,scoreID:0,partID:0,name:'',base64:''};
    this.stop= true;
  }

}