import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ensemble',
    loadChildren: () => import('./ensemble/ensemble.module').then( m => m.EnsemblePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },  
  
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'score',
    loadChildren: () => import('./score/score.module').then( m => m.ScorePageModule)
  },
  {
    path: 'score-detail',
    loadChildren: () => import('./score-details/score-details.module').then( m => m.ScoreDetailsPageModule)
  },  {
    path: 'all-events',
    loadChildren: () => import('./all-events/all-events.module').then( m => m.AllEventsPageModule)
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
