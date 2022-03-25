import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isThisQuarter } from 'date-fns';
import { EnsembleService } from 'src/app/services/ensemble.service';
import { Event } from 'src/app/struct/ensemble';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  @Input() writeMap:boolean;
  
  @Output() chosenLocation= new EventEmitter();

  public chosenLng: number;  
  public chosenLat: number;


  //google map options
  gestureHandling: string= "";

  public markerPosition: google.maps.LatLngLiteral[];
  //public markerPosition: google.maps.LatLngLiteral[] = [{ lat: this.lat, lng: this.lng }];

  public eventID:any;
  public selectedEvent: Event | undefined;
  public location:any;
    
  options: google.maps.MapOptions = {}

  constructor(private route: ActivatedRoute,
              public ensembleService:EnsembleService){

  }
  
  ngOnInit(){    
    if(this.writeMap){
      this.gestureHandling= undefined;
    }
    else{
      this.gestureHandling="none";
    } 

    console.log('wripte map: ',this.writeMap);
    
    this.selectedEvent= undefined;

    this.setMap();

  }

  mapClick(event){
    event= event.latLng.toJSON();

    if(this.writeMap){
      this.chosenLat=event.lat;
      this.chosenLng=event.lng;
  
      this.markerPosition=[{ lat: this.chosenLat, lng: this.chosenLng }];
  
      console.log("pos: ",event);
    }
    
  }


  setMap(){
    
    this.chosenLng= 14.507898;
    this.chosenLat= 35.895450;

    if(! this.writeMap){
      //get ID the user selected from URL
      console.log("route is: "+ this.route);
      this.eventID=parseInt(this.route.snapshot.params['eventId']);
      
      //get event by ID
      this.selectedEvent=this.ensembleService.getEventByID(this.eventID);
      console.log("Event ID: "+ this.eventID);
      console.log("selected event: ",this.selectedEvent);
  
      if (this.selectedEvent === undefined)
      {
        console.log("Event not found!");
        return;
      }

      this.location = this.selectedEvent.location;
      
      this.markerPosition=[{ lat: this.location.lat, lng: this.location.lng }];

      console.log("marker pos, ",this.markerPosition);
      
      
      this.options={...this.options,
        gestureHandling:this.gestureHandling,
        center:{ lat: this.location.lat, lng: this.location.lng },
      }

      
    }
    
    else{
      this.markerPosition=[{ lat: this.chosenLat, lng: this.chosenLng }];
    
      this.options={...this.options,
        gestureHandling:this.gestureHandling,
        center:{ lat: this.chosenLat, lng: this.chosenLng },
      }
  
      console.log("options: ",this.options);
    }


    this.chosenLocation.emit({lat:this.chosenLat, lng:this.chosenLng});

  }


}

