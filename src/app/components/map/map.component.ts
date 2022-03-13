import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  public lat: number = 35.895450;
  public lng: number = 14.507898;

  public markerPosition: google.maps.LatLngLiteral[] = [{ lat: this.lat, lng: this.lng }];


  options: google.maps.MapOptions = {
    center: { lat: this.lat, lng: this.lng }
  }


}