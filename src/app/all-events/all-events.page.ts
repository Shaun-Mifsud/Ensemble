import { Component, OnInit } from '@angular/core';
import {format, parseISO} from 'date-fns';

import { Event } from '../struct/ensemble'; 
import { EnsembleService } from '../services/ensemble.service';

import { ModalController } from '@ionic/angular';
import { NewEventComponent } from '../components/new-event/new-event.component';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
})
export class AllEventsPage implements OnInit {

  dateValue= format(new Date(), 'yyyy-MM-dd') 'dd MMMM yyyy';
  todaysDate='';
  selectedDate='';
  eventsByDate: Event[];

  public eventCount:any;

  
  ngOnInit() {
    // get all events by date
    this.eventsByDate= this.ensembleService.getEventsByDate(this.dateValue);

    // get all events count
    this.eventCount = this.ensembleService.getEventsLengh();
    
    
  }
  
  constructor(public ensembleService: EnsembleService,
              private modalCtrl:ModalController) { 

    this.todaysDate= this.dateValue;
    this.selectedDate= this.todaysDate;
    
  }
  
  setToday(){
    const today = new Date();
    this.dateValue = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    this.todaysDate=this.dateValue;
    console.log("date value: ",this.dateValue);
    
    //this.dateValue= format(parseISO(this.todaysDate),'dd MMMM yyyy');
  }

  dateChanged(value){
    console.log("value",format(parseISO(value),'dd MMMM yyyy'));
    
    this.dateValue = value;
    this.eventsByDate = this.ensembleService.getEventsByDate(this.dateValue);
    
    this.selectedDate = format(parseISO(value),'dd MMMM yyyy');
  }

    //new event model
    async showModal(){
      const modal = await this.modalCtrl.create({
        component:NewEventComponent,
        componentProps: {hasEnsemble:false,ensembleID:0,ensembleEvent:this.eventCount},
        cssClass:'eventModal'
      })
  
      await modal.present();
    }
  

}
