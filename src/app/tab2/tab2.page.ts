import { Component } from '@angular/core';
import { EnsembleService } from '../services/ensemble.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public ensembleService: EnsembleService,
              ) {

  }

  ngOnInit() {

    
  }

    

}
