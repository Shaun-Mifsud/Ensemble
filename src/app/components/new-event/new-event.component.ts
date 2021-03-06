import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Event, Score } from 'src/app/struct/ensemble';
import { EnsembleService } from 'src/app/services/ensemble.service';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
})
export class NewEventComponent implements OnInit {

  @Input() ensembleID:number;
  @Input() eventCount:number;
  @Input() hasEnsemble:boolean;
  
  public newEvent: Event = {id:0, name: '',ensembleID:0,scores:[],description:'',type:'',date:'',time:''};
  public ensembleName:string;


  dateValue= format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'; 
  todaysDate='';
  selectedDate='';

  chosenLocation:any;

  currentYear= new Date().getFullYear();

  //image
  imageBase64 = '';
  imageSource = '';

  constructor(private ModalCtrl: ModalController,
              public alertController: AlertController,
              public ensembleService: EnsembleService) 
    {
      //setting todays date
      this.setToday();
    }

  ngOnInit() {
    //selecting ensemble to save in    
    if(this.hasEnsemble){
      this.newEvent.ensembleID = this.ensembleID;
      console.log("ensemble ID: ",this.ensembleID);
    }
    
    
    //getting number of events
    this.eventCount = this.ensembleService.getEventsLength();
    //setting the new ID
    this.newEvent.id = this.eventCount +1;

    //set header by ensemble name if hasEnsemble
    if(this.hasEnsemble){
      this.ensembleName = this.ensembleService.getEnsembleByID(this.ensembleID).name;
    }

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

  //image
  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }

  //image
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
        this.imageBase64= btoa(binaryString);
        this.imageSource ='data:image/jpeg;base64,' + this.imageBase64;      
  }

  //programm
  checkBoxChange(e:any, scoreID:number){
    console.log("checkbox change: ",e.currentTarget.checked);
    
    if(e.currentTarget.checked){
      this.newEvent.scores.push(scoreID);
    }

    else{    
      
      for( var i = 0; i < this.newEvent.scores.length; i++){ 
        
        if ( this.newEvent.scores[i] === scoreID) {     
          this.newEvent.scores.splice(i, 1); 
        }
        
      }
      
    }
    
    console.log("lenght: ",this.newEvent.scores.length);
    console.log("new event program: ",this.newEvent.scores);
    
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
    if(!this.hasEnsemble){
      this.newEvent.ensembleID= undefined;
    }
    if(this.newEvent.image !=null){
      this.newEvent.image = this.imageSource;
    }

    this.newEvent.location = this.chosenLocation;
    
    //save new event
    this.ensembleService.saveEvent("Events",this.newEvent);

    //reset temporary variable 
    this.newEvent = {id:0, name: '',ensembleID:this.ensembleID,scores:[],description:'',type:'',date:'',time:''};

    this.close();
  }

}
