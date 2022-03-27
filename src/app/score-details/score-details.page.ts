import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EnsembleService } from '../services/ensemble.service';
import { Part, Recording, Score } from '../struct/ensemble';

import { ModalController } from '@ionic/angular';
import { NewEventComponent } from '../components/new-event/new-event.component';

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.page.html',
  styleUrls: ['./score-details.page.scss'],
})
export class ScoreDetailsPage implements OnInit {

  //default tab
  selectedtab: string= "score";
  public scoreID:any;
  public selectedScore: Score | undefined;
  public scoreEvents: any; 
  public parts: Part[];
  public selectedPart:number;

  public recordings: Recording[];
  public urlPath:string[] | undefined;

  //variables used to contain each respective part from the selected score
  //categories variables
  public strings:string[] = [];
  public woodwind:string[] = [];
  public brass:string[] = [];
  public percussion:string[] = [];

  constructor(private route: ActivatedRoute,
              private router:Router,
              public ensembleService: EnsembleService,
              private modalCtrl:ModalController) { }

  ngOnInit() {

    console.log("route is: " + this.route);
    
    //get scoreID from URL
    this.scoreID=parseInt(this.route.snapshot.params['scoreID']);
    
    //get score by ID
    this.selectedScore=this.ensembleService.getScoreByID(this.scoreID);
    console.log("Selected score ID: "+ this.scoreID);

    //get parts from selectedscore
    this.parts=this.selectedScore.parts;
    console.log("All parts: ", this.parts);

    //get events by scoreID
    this.scoreEvents = this.ensembleService.getEventsByScoreID(this.scoreID);      
    console.log("Events by score: ", this.scoreEvents);
    

    if(this.selectedScore.type == 'static'){
      //get partFamily and place them in categories variables aggording to family
      //string
      let stringList = Object.values(this.parts.filter(f => f.partFamiliy == 'string'));

      for(let list in stringList){
        this.strings.push(stringList[list].partName);
      }

      //brass
      let brassList = Object.values(this.parts.filter(f => f.partFamiliy == 'brass'));

      for(let list in brassList){
        this.brass.push(brassList[list].partName);
      }

      //woodwind
      let woodwindList = Object.values(this.parts.filter(f => f.partFamiliy == 'woodwind'));

      for(let list in woodwindList){
        this.woodwind.push(woodwindList[list].partName);
      }

      //percussion
      let percussionList = Object.values(this.parts.filter(f => f.partFamiliy == 'percussion'));

      for(let list in percussionList){
        this.percussion.push(percussionList[list].partName);
      }

      //get recording by selected scoreID
      this.recordings= this.ensembleService.getRecordingsByScoreID(this.scoreID);
      console.log("recordings: ",this.recordings);

      console.log('URL path: ',this.urlPath);
      
      //categories variables console output 
      console.log("Strings: ",this.strings);
      console.log("Woodwind: ",this.woodwind);
      console.log("Brass: ",this.brass);
      console.log("Percussion: ",this.percussion);

        }
      }


  //To navigate to score page by the part selected by the user
  partSelect(instrInPart:string){
    // get selectedPart index from partName
    this.selectedPart = this.parts.findIndex((p) => p.partName == instrInPart);
    console.log("selected part ID: ", this.selectedPart);
    
    //navigate by selectedPart
    this.router.navigate(['/score', this.scoreID, this.selectedPart]);

  }

  //To display only the family of instruments that are available in the score
  //return true if available
  //returns false if unavailable
  checkParts(partName:string):boolean{
    switch(partName){
      case 'strings':{
        if(this.strings.length < 1){
          return false;
        }
        else return true;
      }
      case 'woodwind':{
        if(this.woodwind.length < 1){
          return false;
        }
        else return true;
      }
      case 'brass':{
        if(this.brass.length < 1){
          return false;
        }
        else return true;

      }
      case 'percussion':{
        if(this.percussion.length < 1){
          return false;
        }
        else return true;
      }

    }    
  }

    //event model
    async showModal(){
      const modal = await this.modalCtrl.create({
        component:NewEventComponent,
        componentProps: {ensembleID:this.selectedScore.ensembleID, ensembleEvent:this.ensembleService.getEventsLength()},
        cssClass:'eventModal'
      })
  
      await modal.present();
    }
  
    async close(){
      await this.modalCtrl.dismiss();
    }
}
