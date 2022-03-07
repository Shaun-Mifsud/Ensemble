import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EnsembleService } from '../services/ensemble.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(
    private router:Router, 
    public ensembleService: EnsembleService) {}


  ngOnInit(): void {

    this.router.events.subscribe(nav => {
      if (nav instanceof NavigationEnd)
      {
        console.log("Link changed.");        
      }
    });
    
    
  }

  
}
