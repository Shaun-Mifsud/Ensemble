import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreDetailsPage } from './score-details.page';

import { CommonModule } from '@angular/common';

const routes: Routes = [
/*  {
    path: '',
    children:[
      //if NO scoreID is present, redirect to tabs/tab2
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      },

      //if scoreID is present, load score detail page
      {
        path:':scoreID',
        component:ScoreDetailsPage
      }
    ]
  } */
  {
    path: '',
    component: ScoreDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule,CommonModule],
})
export class ScoreDetailsPageRoutingModule {}
