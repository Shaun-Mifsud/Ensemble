import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

import Embed from 'flat-embed';
import { MetronomeComponent } from '../components/metronome/metronome.component';
import { PageScaleComponent } from '../components/page-scale/page-scale.component';
import { RecordingComponent } from '../components/recording/recording.component';
import { TunerComponent } from '../components/tuner/tuner.component';
import { RecordingConfirmComponent } from '../components/recordingConfirm/recording-confirm.component';

import { EnsembleService } from '../services/ensemble.service';
import { ToolsService } from '../services/tools.service';
import { Part, Recording, Score } from '../struct/ensemble';

import * as Tone from 'tone';
import {Howl, Howler} from 'howler'; 

declare var $: any;
import * as RecordRTC from 'recordrtc';



@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {


  rotationSubscription:any;
  zoomScaleSubscription:any;

  public scoreID:any;
  public partID:any;

  public selectedScore: Score | undefined;
  public selectedPart: Part | undefined;

  public pdfSrc: any;
  public rotation = 0;
  public zoom=1;
  public zoomScale:'page-width'|'page-fit'|'page-height';
  public currentPage:number= 1;
  public noOfPages:number;

  //recording
  tempRecord:any;
  recordingCount:number;
  newRecordingName:string;
  base64:any;

  currentRecording:Recording = {id:0,scoreID:0,partID:0,name:'',base64:''};
  recordings:Recording[];

  url:any;
  error:any
  isRecording=false;


  sound= new Audio;
  public soundIsPlaying:boolean= false;

  countdownBegan = false;     // flags that you want the countdown to start
  stopIn = 5000;    // how long the timer should run
  stopTime = 0;     // used to hold the stop time
  stop = false;     // flag to indicate that stop time has been reached
  timeTillStop = 0; // holds the display time


  constructor(private route:ActivatedRoute,
              public ensembleService:EnsembleService,
              public tools:ToolsService,
              public popoverController:PopoverController,
              private modalCtrl:ModalController,
              private modalCtrl2:ModalController,
              private domSanitizer: DomSanitizer
            ) 
  { }

  
    handleValue(value) {
      console.log(value); //SlideRuler return value
    }

  ngOnInit() {
    this.countdownBegan=false;
    console.log("in score page");
    

    //get ID the user selected from URL
    this.scoreID=parseInt(this.route.snapshot.params['scoreID']);
    
    //get score by scoreID
    this.selectedScore=this.ensembleService.getScoreByID(this.scoreID);

    if(this.route.snapshot.params['scorePart']){ 
      //get part by URL
      this.partID=parseInt(this.route.snapshot.params['scorePart']);
      console.log('PARTID: ', this.partID);

      this.selectedPart = this.selectedScore.parts[this.partID-1]; // <-- can this be an issue since the index and partID is 1 number different ?
      

      if(this.selectedScore.type == "static"){
        console.log("static score");
        //set PDF source by partPath
        this.pdfSrc=this.selectedPart.partPath;
        console.log("Selected score: ", this.selectedScore);
        
      } 
  }

    if(this.selectedScore.type == "interactive"){
      console.log("interactive score");
      
      const container = document.getElementById('sheetmusic');
      const embed = new Embed(container, {
        embedParams: {
          appId: '59e7684b476cba39490801c2',
          controlsPosition: 'top',
          layout:'responsive',
          videoPosition:'top',
          branding:'false',
          controlDisplay:'true',
          controlsParts:'true',
          themePrimary:'#0B1A33'
  
        }
      });
  
      fetch(this.selectedScore.fullScorePath)
      .then(response => response.text())
      .then(xml => embed.loadMusicXML(xml))
      .then(() => embed.setTrack(
        {
          id: 'aflat',
          type: 'youtube',
          mediaId: 'Hv4Jylc_Kq4',
          synchronizationPoints: [
            { type: 'measure', time: 5, location: { measureIdx: 0 }},
            { type: 'end', time: 58 }
          ],
        }
      ))
      
      .then(() => embed.useTrack({ id: 'aflat' }))
      .catch(error => console.error(error));

    }
    
  }

  back(){
    if(this.currentPage !=1){
      this.currentPage = this.currentPage-1;
    }

  }

  forward(){
    if(this.currentPage !=this.noOfPages){
      this.currentPage = this.currentPage+1;
    }
  }

  pageInitialized(e: any) {
    this.noOfPages= e.source._pages.length;
  }

    
  // metronome modal
  async showMetornomeModal(){
    const modal = await this.modalCtrl.create({
      component:MetronomeComponent,
      cssClass:'metronomeModal',
    })

    await modal.present();
  }

  startMetronome(noOfBeats:number, beatValue:number){
    Tone.start();
    var barCount:number=0;

		Tone.Transport.bpm.value=60;
    Tone.Transport.start();

    var sound = new Howl({
      src: ['assets/sounds/metronome/woodblock.wav'],
      onplayerror: function() {
        sound.once('unlock', function() {
          sound.play();

        });
      }
    });

    //this will start the player on every quarter note
    Tone.Transport.scheduleRepeat(function(){
      sound.play();    
      barCount = barCount + 1;
      console.log("bar count: ", barCount);
      
      if(barCount == noOfBeats){
        barCount=0;
      }

      if(barCount  == 1){ 
        console.log("bar counter is 1");

        var firstBeat = new Howl({
          src: ['assets/sounds/metronome/woodblockFirstBeat.wav']
        });

        firstBeat.play();
      }
      
      }, "4n");
      
    this.soundIsPlaying= true;
  }

  startPlaying() {
    Tone.Transport.start();
  }

  stopPlaying() {
    Tone.Transport.cancel();
    this.soundIsPlaying =false;
  }

  //tuner modal
  async showTunerPopover(ev:any){
    const popover = await this.popoverController.create({
      component: TunerComponent,
      cssClass: 'tunerPopover',
      event:ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //page options
  async pageOptions(ev:any){
    const popover = await this.popoverController.create({
      component: PageScaleComponent,
      componentProps:{rotation: this.rotation},
      cssClass: 'pageScalePopover',
      event:ev,
      translucent: true,
    });
    
    await popover.present();  
    
    // page options
    //rotation
    this.rotationSubscription= this.tools.getRotationChangeEmitter()
    .subscribe(rotation => this.selectedRotation(rotation));

    this.zoomScale="page-width";

    //zoom scale
    this.zoomScaleSubscription= this.tools.geZoomScaleChangeEmitter()
    .subscribe(zoomScale => this.selectedZoomScale(zoomScale));

    await popover.onDidDismiss().then(res=> this.ngOnDestroy(), error => console.log("Error: ",error));
    
  } 

  //rotation from subscription
  selectedRotation(rotation:number){
    this.rotation= rotation;
    console.log("currently in selectedRotation func");
  }

  //zoom scale from subscription
  selectedZoomScale(zoomScale:any){    
    this.zoomScale=zoomScale;
    console.log("selecged zoom scale func: ",this.zoomScale);
    
  }
  

  //recording modal
  async recordingModal() {
    const modal = await this.modalCtrl.create({
      component: RecordingComponent,
      componentProps: {scoreID:this.scoreID, selectedPart:this.selectedPart},
      cssClass: 'recordingModal',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if(data.data =="recordingClick"){
        this.startCountdown();
        this.countdownBegan=true;
      }

    });
  }


  //start countdown
  startCountdown(){
    requestAnimationFrame(this.update.bind(this));  // start the countdown
    this.startMetronome(4,4); //hard coded
  }

  update(timer){

    if(this.countdownBegan){  // do we need to start the timer
      this.stopTime = timer + this.stopIn; // yes the set the stoptime
      this.countdownBegan = false;             // clear the start flag
    }
    else{                         // waiting for stop
        if(timer >= this.stopTime){     // has stop time been reached?
          this.stop = true;           // yes the flag to stop
        }
    }
  
    this.timeTillStop = this.stopTime - timer;      // for display of time till stop
    // log() should be whatever you use to display the time.
    console.log("time: ",Math.floor(this.timeTillStop / 1000) );  // to display in 1/100th seconds
    this.timeTillStop= Math.floor(this.timeTillStop / 1000);
  
    if(!this.stop){
        requestAnimationFrame(this.update.bind(this)); // continue animation until stop 
    }
  
    else{
      console.log("countdown end");
      this.initiateRecording();
    }
  }

  //recording  
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
    this.stopPlaying();
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


  
  ngOnDestroy() {
    if(this.rotationSubscription != undefined){
      this.rotationSubscription.unsubscribe();
    }

    if(this.zoomScaleSubscription != undefined){
      this.zoomScaleSubscription.unsubscribe();
    }
  }

  
}