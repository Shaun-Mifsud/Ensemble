import { Component, OnInit } from '@angular/core';
import { PickerOptions } from '@ionic/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss'],
})
export class MetronomeComponent implements OnInit {

  public noOfBeats:number= 4 ;
  public beatValue:number= 4;

  ngOnInit() {}


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

    let picker = await this.pickerCtrl.create(opts);
    picker.present();

    const dismiss = await picker.onDidDismiss();
    if (dismiss.role === "done") {
      this.noOfBeats= dismiss.data.noOfBeats.value;
      this.beatValue= dismiss.data.beatValue.value;

      console.log("number of beats : ",this.noOfBeats);
      console.log("beat value: ",this.beatValue);
      
    }
    

  }
}
  
