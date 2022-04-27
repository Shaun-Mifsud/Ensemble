import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScoreDetailsPageModule } from '../score-details/score-details.module';
import { ScorePageModule } from '../score/score.module';
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
                loadChildren: () => import('../score-details/score-details.module').then(m => m.ScoreDetailsPageModule)
              },
              //part by ID
              {
                path:':scorePart',
                loadChildren: () => import('../score/score.module').then(m => m.ScorePageModule)
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
