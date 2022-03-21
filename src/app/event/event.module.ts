import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';


import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [EventPage],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    
    ComponentsModule
  ],



})
export class EventPageModule { }

