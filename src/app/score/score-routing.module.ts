import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';

import { ScorePage } from './score.page';


import { CommonModule } from '@angular/common';

const routes: Routes = [
/*     {
    path: '',
    children:[
      //if NO scoreID is present, redirect to tabs/tab2
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      },

      //if scoreID is present, load score page
      {
        path:':scoreID',
        children:[
          {
            //score by ID
            path: '',
            children:[
              {                
                path: '',
                component: ScorePage
              },
              //score part
              {
                path:':scorePart',
                component:ScorePage
              }
            ]
          }
        ]
      }
    ]
  } */

  {
    path: '',
    component: ScorePage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule,CommonModule],
})
export class ScorePageRoutingModule {}
