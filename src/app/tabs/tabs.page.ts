import { Component } from '@angular/core';
import {Router,Event,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public notificationCount = 0;
  public currentUrl: string;
  public tabsVisibility:number | string="show";

  constructor(private router: Router) {
    console.log("TOP: ", this.tabsVisibility);
    
      this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationEnd) {
              console.log('loading finished', event);
              //this.currentUrl = event.url.split('/').join('-')
              this.currentUrl = event.url;

              if(this.currentUrl == '/tabs/tab2'){
                this.tabsVisibility="show";
                console.log("True");
                console.log(this.tabsVisibility);
                console.log("currentURL: ",this.currentUrl);
              }

              else{
                this.tabsVisibility="show"
              }
              
          }
      });
    }

}
