import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnsemblePage } from '../ensemble/ensemble.page';
import { EventPage } from '../event/event.page';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        //tab 4
        path: '',
        component: Tab4Page
      },
      
      {
        path: ':ensembleId',
        children:[
          {
            //ensemble by ID
            path: '',
            children:[
              {                
                path: '',
                component: EnsemblePage
              },
              //event by ID
              {
                path:':eventId',
                component:EventPage
              }
            ]
          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
