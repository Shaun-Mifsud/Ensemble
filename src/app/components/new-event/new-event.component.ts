import { Component, Input, OnInit } from '@angular/core';
import {ModalController, AlertController} from '@ionic/angular';
import { Event } from 'src/app/struct/ensemble';
import { EnsembleService } from 'src/app/services/ensemble.service';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
})
export class NewEventComponent implements OnInit {

  @Input() ensembleID:number;
  @Input() eventCount:number;
  
  public newEvent: Event = {id:0, name: '',ensembleID:0,description:'',type:'',date:'',time:''};

  constructor(private ModalCtrl:ModalController,
              public alertController: AlertController,
              public ensembleService:EnsembleService,

              ) { }

  ngOnInit() {
    //selecting ensemble to save in
    this.newEvent.ensembleID = this.ensembleID;

    //getting number of events
    this.eventCount = this.ensembleService.getEventsLengh() +1;
    //setting the new ID
    this.newEvent.id = this.eventCount;
    
  }
  
  //Alert
  async handleButtonClick(){
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Delete Event',
      subHeader: 'Information will be lost',
      message: 'You cannot undo this action',
      buttons:[
        {
          text:"Yes", handler:() =>{
            this.close();
          }
        },
        {
          text:"No"
        }
      ]
    });
    
    alert.present();


  }

  //modal close
  async close(){
    await this.ModalCtrl.dismiss();
  }

  //saving new event
  async save(){

    //save new event
    this.ensembleService.save("Events",this.newEvent);

    //reset temporary variable 
    this.newEvent = {id:0, name: '',ensembleID:this.ensembleID,description:'',type:'',date:'',time:''};

    this.close();
  }

}
