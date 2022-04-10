import { Component } from '@angular/core';
import { Compressor } from 'tone';
import { EnsembleService } from '../services/ensemble.service';
import { Score } from '../struct/ensemble';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public composerName: string[];
  public composers:[{composer:string, score:any[] }] = [{composer:'random composer',score:['random score']}];

  constructor(public ensembleService: EnsembleService) { }

  ngOnInit() {

    let score = this.ensembleService.score;

    this.composerName = score.map(item => item.composer)
      .filter((value, index, self) => self.indexOf(value) === index)

      for(var i = 0; i < this.composerName.length; i++){
        this.composers.push({composer:this.composerName[i], score: score.filter(c => c.composer == this.composerName[i])});
      } 

      //remove the first element of the array, to remove 'random composer'
      this.composers.shift();
    
  }


    

}
