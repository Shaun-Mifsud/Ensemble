import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { Oscillator, Synth, Volume } from 'tone';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss'],
})
export class TunerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  synth:any;
  btnCheck: boolean = false;
  soundIsPlaying: boolean = false;
  currentlySelected:string;

  //


  playNote(selectedNote:string){

    //change background colour on ion-item which is currently selected 
    this.currentlySelected=selectedNote;

    this.btnCheck=true;

    if(this.soundIsPlaying){
      this.soundIsPlaying=false;
      this.synth.triggerRelease("0");
    }

      //create a synth and connect it to the main output
      this.synth = new Tone.Synth({volume:1}).toDestination();
      
      //play note
      this.synth.triggerAttackRelease(selectedNote, 5);
    
      this.soundIsPlaying=true;
  }
  
  getBtnValue(value){
    if(value.detail.checked){
      this.btnCheck=true;
    }
    
    else{
      this.btnCheck=false;
      this.soundIsPlaying=false;
      this.currentlySelected=null;
      this.synth.triggerRelease("0");
    }
  }

}