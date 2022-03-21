import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  @Input() writeMap:boolean;
  
  @Output() chosenLocation= new EventEmitter();

  public chosenLng: number = 14.507898;  
  public chosenLat: number = 35.895450;


  //google map options
  gestureHandling: string= "";

  public markerPosition: google.maps.LatLngLiteral[];
  //public markerPosition: google.maps.LatLngLiteral[] = [{ lat: this.lat, lng: this.lng }];
    
  options: google.maps.MapOptions = {}
  
  ngOnInit(){
    
    if(this.writeMap){
      this.gestureHandling= undefined;
    }
    else{
      this.gestureHandling="none";
    } 
    
    this.setMap();

  }

  mapClick(event){
    event= event.latLng.toJSON();

    if(this.writeMap){
      this.chosenLat=event.lat;
      this.chosenLng=event.lng;
    }

    else{
      return;
    }    
    this.markerPosition=[{ lat: this.chosenLat, lng: this.chosenLng }];
  }


  setMap(){
    this.markerPosition=[{ lat: this.chosenLat, lng: this.chosenLng }];
    
    this.options={...this.options,
      gestureHandling:this.gestureHandling,
      center:{ lat: this.chosenLat, lng: this.chosenLng },
    }
    console.log("options: ",this.options);

    this.chosenLocation.emit({lat:this.chosenLat, lng:this.chosenLng});
  }


    
  }

