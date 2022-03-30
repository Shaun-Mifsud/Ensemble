import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  rotation:number=0;
  newRotation: EventEmitter<number> = new EventEmitter();


  emitRotationChangeEvent(direction:string, rotation:number) {
    
    if(direction =='l'){
      this.rotation = this.rotation - 90
      this.newRotation.emit(this.rotation); 
    }
    
    else if(direction =='r'){
      this.rotation = this.rotation + 90
      this.newRotation.emit(this.rotation);
    }

  }

  getRotationChangeEmitter() {
    return this.newRotation;
  }
}
