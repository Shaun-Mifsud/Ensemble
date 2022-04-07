import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PickerOptions } from '@ionic/core';
import { PickerController } from '@ionic/angular';

import  SlideRuler  from 'slide-ruler';
import * as Tone from 'tone';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { isThisQuarter } from 'date-fns';

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
  public barCounter:number;


  ngOnInit() {
    this._renderSlideRuler();
  }


  constructor(private pickerCtrl: PickerController) {}


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
    
          console.log("number of beats : ",this.noOfBeats);
          console.log("beat value: ",this.beatValue);
          
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
            precision: 1    
          }
        );
  }

  handleValue(value) {
    //this.selectedBpm=value;
    Tone.Transport.bpm.value = value;
  }

  getBtnValue(value){
    if(value.detail.checked){
      this.btnCheck=true;
      this.setMetronome();
      this.start();
      console.log('true');
    }
    
    else{
      this.btnCheck=false;
      this.stop();
    }
  }

  //sound
  setMetronome(){
    var metronome = new Tone.Player("assets/sounds/metronome/woodblock.wav").toDestination();
		Tone.Transport.bpm.value=60;


    //this will start the player on every quarter note
    Tone.Transport.scheduleRepeat(function(time){
        metronome.start(time);
    }, "4n");

  }

  start() {
    Tone.Transport.start();
  }

  stop() {
    Tone.Transport.stop();

    //this.metronome=undefined;
    
    this.barCounter= 0;
  }



  
}
