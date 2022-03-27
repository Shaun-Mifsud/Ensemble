import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  rotation:number=0;


  getRotation(rotation:number){
    this.rotation= rotation;
  }
}
