import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnsembleService } from '../services/ensemble.service';

import { PopoverController } from '@ionic/angular';
import { ScorePopComponent } from '../components/score-pop/score-pop.component';

import { SwiperComponent } from 'swiper/angular';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
Swiper.use([Pagination]);


@Component({

  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page implements OnInit, AfterContentChecked {
  @ViewChild('siwper') swiper: SwiperComponent;

  constructor(
    public ensembleService: EnsembleService,
    public popoverController: PopoverController) {

  }

  ngOnInit() {

  }

  //swiper
  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  config: SwiperOptions = {
    slidesPerView: 3,
    pagination: true,

  }


  //score popover
  async showPopover(ev: any) {
    console.log(ev);


    ev.stopPropagation();
    const popover = await this.popoverController.create({
      component: ScorePopComponent,
      cssClass: 'scorePopover',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}



