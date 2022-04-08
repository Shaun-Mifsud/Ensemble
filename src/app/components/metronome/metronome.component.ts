import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PickerOptions } from '@ionic/core';
import { PickerController } from '@ionic/angular';

import  SlideRuler  from 'slide-ruler';
import * as Tone from 'tone';
import {Howl, Howler} from 'howler'; 


@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MetronomeComponent implements OnInit {

  @ViewChild('slideRuler', { read: ElementRef, static:true }) slideRuler;

  public noOfBeats:number = 4;
  public beatValue:number = 4;
  public btnCheck: boolean = false;
  public soundIsPlaying:boolean= false;
  


  ngOnInit() {
    this._renderSlideRuler();

  }


  constructor(private pickerCtrl: PickerController) {
  }


  async showPicker(selected:string){
    
    if(selected =='beats'){
      let beatsOpts: PickerOptions = {
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Done',
            role:'done',
          }
        ],
        columns: [
          {
            name: 'noOfBeats',
            options: [
              { text: '1', value: '1'},
              { text: '2', value: '2'},
              { text: '3', value: '3'},
              { text: '4', value: '4'},
              { text: '5', value: '5'},
              { text: '6', value: '6'},
              { text: '7', value: '7'},
              { text: '8', value: '8'},
              { text: '9', value: '9'},
              { text: '10', value: '10'},
              { text: '11', value: '11'},
              { text: '12', value: '12'}
            ]
          }
        ],
        cssClass:'timeSignaturePicker',
  
      };
      
      const picker = await this.pickerCtrl.create(beatsOpts);
      await picker.present();
  
      const dismiss = await picker.onDidDismiss();
        if (dismiss.role === "done") {
          this.noOfBeats= dismiss.data.noOfBeats.value;
          
          if(this.soundIsPlaying){
            this.stop();
            this.startMetronome(this.noOfBeats,this.beatValue);
          }
          else{
            this.startMetronome(this.noOfBeats,this.beatValue);
          }
        }
    }

    else{
      let ValueOpts: PickerOptions = {
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Done',
            role:'done',
          }
        ],
        columns: [
          {
            name: 'beatValue',
            options: [
              { text: '2', value: '2'},
              { text: '4', value: '4'},
              { text: '8', value: '8'},
              { text: '16', value: '16'}
            ]
          }
        ],
        cssClass:'timeSignaturePicker',
  
      };
      
      const picker = await this.pickerCtrl.create(ValueOpts);
      await picker.present();
  
      const dismiss = await picker.onDidDismiss();
        if (dismiss.role === "done") {
          this.beatValue= dismiss.data.beatValue.value;

          if(this.soundIsPlaying){
            this.stop();
            this.startMetronome(this.noOfBeats,this.beatValue);
          }
          else{
            this.startMetronome(this.noOfBeats,this.beatValue);
          }
        }
    }


  }

  //slider ruler
  _renderSlideRuler(){
    console.log("slider: ",this.slideRuler);
    
    return new SlideRuler (
          {
            el: this.slideRuler.nativeElement,
            maxValue: 250,
            minValue: 32,
            currentValue: 60,
            handleValue: this.handleValue,
            precision: 0.5,    
          }
        );
  }

  handleValue(value) {
    Tone.Transport.bpm.value = value;
  }

  getBtnValue(value){
    if(value.detail.checked){   
      this.startMetronome(this.noOfBeats,this.beatValue);
      Tone.start();
      this.btnCheck=true;
    }
    
    else{
      this.btnCheck=false;
      this.soundIsPlaying=false;
      this.stop();
    }
  }
  
  //sound
  startMetronome(noOfBeats:number, beatValue:number){
    console.log('no Of Beats: ',noOfBeats);
    console.log('beat Value: ',beatValue);
    
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

  start() {
    Tone.Transport.start();
  }

  stop() {
    Tone.Transport.cancel();
    this.soundIsPlaying =false;
  }

}


  

