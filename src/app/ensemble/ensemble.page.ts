import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';

import { EnsembleService } from '../services/ensemble.service';
import { Ensemble,Event,Score,User } from '../struct/ensemble';

import { ModalController } from '@ionic/angular';
import { NewEventComponent } from '../components/new-event/new-event.component';




@Component({
  selector: 'app-ensemble',
  templateUrl: './ensemble.page.html',
  styleUrls: ['./ensemble.page.scss'],
})
export class EnsemblePage implements OnInit {

  private ensembleID:any;

  public selectedEnsemble: Ensemble | undefined;
  public ensembleEvent: Event[] | undefined;
  public ensembleScore: Score[] | undefined;
  public eventCount:any;
  
  selectedtab: string= "posts";

  constructor(
    private router:Router, 
    private route: ActivatedRoute,
    public ensembleService:EnsembleService,
    private modalCtrl:ModalController) 
    { 
      
    }

  ngOnInit() {
    // event navigation
    this.router.events.subscribe(nav => {
      if (nav instanceof ActivatedRoute)
      {
        console.log("Link changed.");        
      }
    });

    //get ID the user selected from URL
    this.ensembleID=parseInt(this.route.snapshot.params['ensembleId']);
    
    //get ensemble by ID
    this.selectedEnsemble=this.ensembleService.getEnsembleByID(this.ensembleID);

    if (this.selectedEnsemble === undefined)
    {
      console.log("Ensemble not found!");
      return;
    }

    //get ensemble Event by ID
    this.ensembleEvent = this.ensembleService.getEventsByEnsembleID(this.ensembleID);

    // get all events count
    this.eventCount = this.ensembleService.getEventsLengh();

    // get all scores by ensemble
    this.ensembleScore = this.ensembleService.getScoresByEnsembleID(this.ensembleID);
    console.log("ensemble scores:", this.ensembleScore);
    
    }

  //new event model
  async showModal(){
    const modal = await this.modalCtrl.create({
      component:NewEventComponent,
      componentProps: {ensembleID:this.ensembleID,ensembleEvent:this.eventCount},
      cssClass:'eventModal'
    })

    await modal.present();
  }


}
