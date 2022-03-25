import { Component, Input, OnInit } from '@angular/core';
import {EnsembleService} from 'src/app/services/ensemble.service';

declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Part } from 'src/app/struct/ensemble';

@Component({
  selector: 'app-recording-pop',
  templateUrl: './recording-pop.component.html',
  styleUrls: ['./recording-pop.component.scss'],
})
export class RecordingPopComponent implements OnInit {

  @Input() scoreID:number;
  @Input() selectedPart: Part;

  record:any;
  url:any;
  error:any

  recording=false;



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
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }

  /**
  * Stop recording.
  */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }

  /**
  * processRecording Do what ever you want with blob
  * @param  {any} blob Blog
  */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
    console.log("blob: ", blob);
    console.log("url: ", this.url);

    //saving recording
    //this.ensembleService.saveRecording("Recording",);

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
    
  }

  }