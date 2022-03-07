import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnsembleService } from '../services/ensemble.service';

import { PopoverController } from '@ionic/angular';
import { ScorePopComponent } from '../components/score-pop/score-pop.component';

import { SwiperComponent } from "swiper/angular";

//import SwiperCore, {Paginator} from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{  

  //swiper

  constructor(
    public ensembleService:EnsembleService,
    public popoverController:PopoverController
  )
  {

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

  

