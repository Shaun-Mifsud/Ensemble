import { Component, Input, NgModule, OnInit } from '@angular/core';
import {ModalController, AlertController} from '@ionic/angular';
import { Event } from 'src/app/struct/ensemble';
import { EnsembleService } from 'src/app/services/ensemble.service';
import {format, parseISO} from 'date-fns';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
})
export class NewEventComponent implements OnInit {

  @Input() ensembleID:number;
  @Input() eventCount:number;
  @Input() hasEnsemble:boolean;
  
  public newEvent: Event = {id:0, name: '',ensembleID:0,description:'',type:'',date:'',time:''};

  dateValue= format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'; 
  todaysDate='';
  selectedDate='';

  chosenLocation:any;

  currentYear=new Date().getFullYear();

  constructor(private ModalCtrl:ModalController,
              public alertController: AlertController,
              public ensembleService:EnsembleService,) 
    {
      //setting todays date
      this.setToday();
    }

  ngOnInit() {
    //selecting ensemble to save in    
      this.newEvent.ensembleID = this.ensembleID;
    
    //getting number of events
    this.eventCount = this.ensembleService.getEventsLengh() +1;
    //setting the new ID
    this.newEvent.id = this.eventCount;


  }


  setToday(){
    this.todaysDate= format(parseISO(format(new Date(), 'yyyy-MM-dd')),'dd MMMM yyyy');
    this.selectedDate=this.todaysDate;
  }

  dateChanged(value){
    
    this.dateValue = value;    
    this.selectedDate = format(parseISO(value),'dd MMMM yyyy');

    //get date only and set to new event
    this.newEvent.date = format(parseISO(value),'yyyy-MM-dd');
    
    //get time only and set to new event
    this.newEvent.time = format(parseISO(value),'HH:mm:ss');    
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

  //get location from the output of map component
  getLocation(event){
    this.chosenLocation=event;
    
  }
  
  //saving new event
  async save(){
    this.newEvent.location = this.chosenLocation;
    
    //save new event
    this.ensembleService.save("Events",this.newEvent);

    //reset temporary variable 
    this.newEvent = {id:0, name: '',ensembleID:this.ensembleID,description:'',type:'',date:'',time:''};

    this.close();
  }

}
