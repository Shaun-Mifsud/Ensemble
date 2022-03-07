import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorePageRoutingModule } from './score-routing.module';

import { ScorePage } from './score.page';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorePageRoutingModule,
    PdfViewerModule
  ],
  declarations: [ScorePage]
})
export class ScorePageModule {}
