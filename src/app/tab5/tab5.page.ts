import { Component } from '@angular/core';
import { EnsembleService } from '../services/ensemble.service';
import { User } from '../struct/ensemble';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  private userID: number= 1; //hard coded
  public loggedInUser: User | undefined;


  ngOnInit() {
    
    this.loggedInUser=this.ensembleService.getUserByID(this.userID);

    if (this.loggedInUser === undefined)
    {
      console.log("User not found!");
      return;
    }

    
  } 

  constructor(public ensembleService:EnsembleService){

  }

  convertPassword(password: String) {
    let encryPass = '*';
    for(let i=0; i< password.length -1 ;i++){
        encryPass =  encryPass + '*';
    }
    return encryPass;
}

}
