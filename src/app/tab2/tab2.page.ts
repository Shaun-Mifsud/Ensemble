import { Component } from '@angular/core';
import { EnsembleService } from '../services/ensemble.service';
import { PopoverController } from '@ionic/angular';
import { ScorePopComponent } from '../components/score-pop/score-pop.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public ensembleService: EnsembleService,
              public popoverController:PopoverController ) {

  }

  ngOnInit() {

    
  }

    //scorre popover
    async showPopover(ev:any) {
      ev.stopPropagation();
      const popover = await this.popoverController.create({
        component: ScorePopComponent,
        cssClass: 'scorePopover',
        event:ev,
        translucent: true
      });
      await popover.present();
    
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    

}
