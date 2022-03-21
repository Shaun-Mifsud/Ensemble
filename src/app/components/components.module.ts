// made to use google maps in multiple modules

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';


@NgModule({
    imports:[
        IonicModule,
        CommonModule,
        FormsModule,
        GoogleMapsModule
    ],

    declarations: [MapComponent],

    exports:[MapComponent]
})

export class ComponentsModule{}