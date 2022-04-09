import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnsembleService } from '../services/ensemble.service';

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
    ) {

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


}



