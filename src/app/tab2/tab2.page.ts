import { Component, ViewChild } from '@angular/core';
import { EnsembleService } from '../services/ensemble.service';

import { SwiperComponent } from 'swiper/angular';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
Swiper.use([Pagination]);


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('siwper') swiper: SwiperComponent;

  public composerName: string[];
  public composers:[{composer:string, score:any[] }] = [{composer:'random composer',score:['random score']}];

  constructor(public ensembleService: EnsembleService) { }

  ngOnInit() {

    let score = this.ensembleService.score;

    //get every unique composer name
    this.composerName = score.map(item => item.composer)
      .filter((value, index, self) => self.indexOf(value) === index)

      //for each composer, push 'scores' of that composer to 'composers'
      for(var i = 0; i < this.composerName.length; i++){
        this.composers.push({composer:this.composerName[i], score: score.filter(c => c.composer == this.composerName[i])});
      } 

      //remove the first element of the array, to remove 'random composer'
      this.composers.shift();
    
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
