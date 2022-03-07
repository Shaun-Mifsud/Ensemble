import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreDetailsPage } from './score-details.page';

const routes: Routes = [
  {
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreDetailsPageRoutingModule {}
