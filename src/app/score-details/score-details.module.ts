import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreDetailsPageRoutingModule } from './score-details-routing.module';

import { ScoreDetailsPage } from './score-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreDetailsPageRoutingModule
  ],
  declarations: [ScoreDetailsPage]
})
export class ScoreDetailsPageModule {}
