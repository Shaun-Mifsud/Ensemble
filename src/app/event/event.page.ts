import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnsembleService } from '../services/ensemble.service';
import { Ensemble,Event,Score,User } from '../struct/ensemble';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { imageComponent } from '../components/image/image.component';


@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  private eventID:any;
  private ensembleID:any;

  public selectedEnsemble: Ensemble | undefined;
  public selectedEvent: Event | undefined;
  public eventPic: any;
  public eventScores: Score[] | undefined;

  constructor(    
    private router: Router, 
    private route: ActivatedRoute,
    public ensembleService: EnsembleService,
    private domSanitizer: DomSanitizer,
    private modalCTRL: ModalController) { 

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
        console.log("route is: "+ this.route);
        this.eventID=parseInt(this.route.snapshot.params['eventId']);
        
        //get event by ID
        this.selectedEvent=this.ensembleService.getEventByID(this.eventID);
        console.log("Event ID: "+ this.eventID);
    
        if (this.selectedEvent === undefined)
        {
          console.log("Event not found!");
          return;
        }

        //sanitize event image if available
        this.eventPic = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedEvent.image);
        console.log("event pic: ", this.eventPic);
        

        //get ensemble by ID
        this.ensembleID=parseInt(this.route.snapshot.params['ensembleId']);
        console.log("ensemble ID in event: "+ this.ensembleID);

        this.selectedEnsemble=this.ensembleService.getEnsembleByID(this.ensembleID);

        if (this.selectedEnsemble === undefined)
        {
          console.log("Ensemble not found!");
          return;
        }

        //get scores by event
        this.eventScores=[];
        
        for( var i = 0; i < this.selectedEvent.scores.length; i++){
          console.log("in loop: ",i);
          
          this.eventScores.push(this.ensembleService.getScoreByID(this.selectedEvent.scores[i]));
        }
        console.log("event Scores: ",this.eventScores);
    
  }

  async showImageModal(){
    const imageModal = await this.modalCTRL.create({
      component:imageComponent,
      componentProps:{eventImage:this.selectedEvent.image},
      cssClass:'imageModal'
    })

    await imageModal.present();
    
  }

}
