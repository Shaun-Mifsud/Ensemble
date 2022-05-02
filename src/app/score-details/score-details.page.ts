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

  //public recordings: Recording[];
  public urlPath:string[] | undefined;

  //variables used to contain each respective part from the selected score
  //categories variables
  // public orchestra: { name: string, parts: Part[], rec }
  public strings:Part[] = [];
  public woodwind:Part[] = [];
  public brass:Part[] = [];
  public percussion:Part[] = [];

  // Audio
  sound= new Audio;
  isPlaying= false;

  constructor(private route: ActivatedRoute,
              private router:Router,
              public ensembleService: EnsembleService,
              private modalCtrl:ModalController) { }

  ngOnInit() {
    
    //get scoreID from URL
    this.scoreID=parseInt(this.route.snapshot.params['scoreID']);
    console.log("Selected score ID: "+ this.scoreID);
    
    //get score by ID
    this.selectedScore=this.ensembleService.getScoreByID(this.scoreID);    

    //get parts from selectedscore
    this.parts= this.selectedScore.parts;
    console.log("All parts: ", this.parts);

    //get events by scoreID
    this.scoreEvents = this.ensembleService.getEventsByScoreID(this.scoreID);      
    console.log("Events by score: ", this.scoreEvents);
    

    if(this.selectedScore.type == 'static'){
      //get partFamily and place them in categories variables aggording to family

      //string
      let stringList = Object.values(this.parts.filter(f => f.partFamiliy == 'string'));
      console.log("string list: ",stringList);    

      for(let list in stringList){
        const instrument = stringList[list];
        instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID,instrument.partID) || [];
        this.strings.push(instrument);
      }

      //woodwind
      let woodwindList = Object.values(this.parts.filter(f => f.partFamiliy == 'woodwind'));

      for(let list in woodwindList){
        const instrument = woodwindList[list];
        instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID,instrument.partID) || [];
        this.woodwind.push(woodwindList[list]);
      }

      //brass
      let brassList = Object.values(this.parts.filter(f => f.partFamiliy == 'brass'));
      

      for(let list in brassList){
        const instrument = brassList[list];
        
        instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID,instrument.partID) || [];
        this.brass.push(brassList[list]);
      }

      //percussion
      let percussionList = Object.values(this.parts.filter(f => f.partFamiliy == 'percussion'));

      for(let list in percussionList){
        const instrument = percussionList[list];
        instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID,instrument.partID) || [];
        this.percussion.push(percussionList[list]);
      }

      this.getRecordings();

    }
  }
  
    getRecordings(){
        //get recording by selected scoreID
        //this.recordings= this.ensembleService.getRecordingsByScoreID(this.scoreID);
          
        //console.log("recordings by score: ",this.recordings);
  
        console.log('URL path: ',this.urlPath);
        
        //categories variables console output 
        console.log("Strings: ",this.strings);
        console.log("Woodwind: ",this.woodwind);
        console.log("Brass: ",this.brass);
        console.log("Percussion: ",this.percussion);
        
        console.log("string rec: ", this.strings.filter(f => f.recordings.length) );
        console.log("woodwind rec: ", this.woodwind.filter(f => f.recordings.length));
        console.log("brass rec: ", this.brass.filter(f => f.recordings.length));
        console.log("percussion rec: ", this.percussion.filter(f => f.recordings.length));
        
    }

  //To navigate to score page by the part selected by the user
  partSelect(instrInPart:string){
    // get selectedPart index from partName
    this.selectedPart = this.parts.findIndex((p) => p.partName == instrInPart)+1;
    console.log("selected part Index: ", this.selectedPart);
    
    //navigate by selectedPart
    this.router.navigate(['tabs/tab2',this.scoreID,this.selectedPart]);

  }

  getArrayWithRecordings(array: Part[]): Part[]
  {

    return array.filter(a => a.recordings != null && a.recordings.length > 0) || [];
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

  //check if recording is avialable on selected part
  checkRecording(partName:string):boolean{    
    switch(partName){
      case 'strings':{
        //console.log("Strings recoridings filter: ", this.strings.filter(f => f.recordings.length >= 1));

        if(this.strings.filter(f => f.recordings.length >= 1).length >=1){          
          console.log("String REC found !");   
          return true;
        }
        else  false;
      }

      case 'woodwind':{        
        //console.log("woodings recoridings filter: ",this.woodwind.filter(f => f.recordings.length >= 1));
        
        if(this.woodwind.filter(f => f.recordings.length >= 1).length >=1){          
          console.log("Woodwind REC found !");   
          return true;
        }
        else  false;

      }
      case 'brass':{
        if(this.brass.filter(f => f.recordings.length >= 1).length >=1){          
          console.log("brass REC found !");   
          return true;
        }
        else  false;

      }
      case 'percussion':{
        if(this.percussion.filter(f => f.recordings.length >= 1).length >=1){          
          console.log("percussion REC found !");   
          return true;
        }
        else  false;
      }

    }    
  } 

  // play rec
  playRec(recording:Recording){

    if(!this.isPlaying){
      this.sound.src=recording.base64;
      this.sound.play();
      this.isPlaying=true;
      
      console.log("Part ID of the audio played: ",recording.partID);
      console.log("sound playing: ",this.sound);

      this.sound.onended= () =>{
        this.isPlaying=false;
      }
    }
    
    else{
      this.sound.pause();
      this.sound.currentTime = 0;
      this.isPlaying=false;
    }
  
  }


  //event model
  async eventModal(){
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
