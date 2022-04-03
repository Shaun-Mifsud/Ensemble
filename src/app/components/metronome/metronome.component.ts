import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PickerOptions } from '@ionic/core';
import { PickerController } from '@ionic/angular';

import  SlideRuler  from 'slider-ruler/slide-ruler';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MetronomeComponent implements OnInit {

  @ViewChild('slideRuler', { read: ElementRef, static:false }) slideRuler;

  public noOfBeats:number= 4 ;
  public beatValue:number= 4;


  ngOnInit() {
    this._renderSlideRuler();
  }


  constructor(private pickerCtrl: PickerController) {}


  async showPicker(){
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
          role:'done'
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
            { text: '7', value: '8'},
            { text: '9', value: '9'},
            { text: '10', value: '10'},
            { text: '11', value: '11'},
            { text: '12', value: '12'}
          ]
        },
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

  }
  //slider ruler
  _renderSlideRuler(){
    console.log("slider: ",this.slideRuler);
    
    return new SlideRuler (
          {
            el: this.slideRuler.nativeElement,
            maxValue: 32,
            minValue: 250,
            currentValue: 60,
            handleValue: this.handleValue,
            precision: 1
          }
        );
  }

  handleValue(value) {
    console.log(value); //SlideRuler return value
  }
    

}
  
