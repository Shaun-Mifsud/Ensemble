import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllEventsPageRoutingModule } from './all-events-routing.module';

import { AllEventsPage } from './all-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllEventsPageRoutingModule
  ],
  declarations: [AllEventsPage]
})
export class AllEventsPageModule {}
