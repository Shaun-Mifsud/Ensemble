import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

import { AllEventsPageRoutingModule } from './all-events-routing.module';

import { AllEventsPage } from './all-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllEventsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllEventsPage]
})
export class AllEventsPageModule {}
