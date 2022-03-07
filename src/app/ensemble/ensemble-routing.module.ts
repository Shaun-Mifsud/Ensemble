import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnsemblePage } from './ensemble.page';


const routes: Routes = [
  {
    path: '',
    component: EnsemblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnsemblePageRoutingModule {}
