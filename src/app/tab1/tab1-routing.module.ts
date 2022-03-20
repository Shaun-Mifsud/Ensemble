import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsPage } from '../all-events/all-events.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
      path:'',
      component:Tab1Page
    },

    {
      path:'events',
      component:AllEventsPage
    }
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Tab1PageRoutingModule {}
