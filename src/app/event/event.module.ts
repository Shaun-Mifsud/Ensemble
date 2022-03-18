import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from '../components/map/map.component';


@NgModule({
  declarations: [EventPage, MapComponent],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    GoogleMapsModule,
    
  ],

  exports: [
    MapComponent
  ]

})
export class EventPageModule { }

