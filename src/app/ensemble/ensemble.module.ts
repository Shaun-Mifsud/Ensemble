import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnsemblePageRoutingModule } from './ensemble-routing.module';

import { EnsemblePage } from './ensemble.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnsemblePageRoutingModule,

  ],
  declarations: [EnsemblePage]
})
export class EnsemblePageModule {}
