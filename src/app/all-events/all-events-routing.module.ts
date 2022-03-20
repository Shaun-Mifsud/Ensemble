import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllEventsPage } from './all-events.page';

const routes: Routes = [
  {
    path: '',
    component: AllEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllEventsPageRoutingModule {}
