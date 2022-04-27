import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScoreDetailsPage } from '../score-details/score-details.page';
import { ScorePage } from '../score/score.page';
import { Tab2Page } from './tab2.page';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        //tab 2
        path: '',
        component: Tab2Page
      },
      
      {
        path: ':scoreID',
        children:[
          {
            //score by ID
            path: '',
            children:[
              {                
                path: '',
                component: ScoreDetailsPage
              },
              //part by ID
              {
                path:':scorePart',
                component:ScorePage
              }
            ]
          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule,CommonModule],

})
export class Tab2PageRoutingModule {}
