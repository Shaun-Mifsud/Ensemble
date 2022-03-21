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

  dateValue= format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'; 
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

    this.setToday();
    
  }
  
  setToday(){
    this.todaysDate= format(parseISO(format(new Date(), 'yyyy-MM-dd')),'dd MMMM yyyy');
    this.selectedDate=this.todaysDate;
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
