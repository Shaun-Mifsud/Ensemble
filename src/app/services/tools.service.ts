import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  rotation:number=0;
  zoomScale:'page-width'|'page-fit'|'page-height' = 'page-width';

  newRotation: EventEmitter<number> = new EventEmitter();
  newZoomScale: EventEmitter<string> = new EventEmitter();

  

  //rotation
  emitRotationChangeEvent(direction:string) {
    
    if(direction =='l'){
      this.rotation = this.rotation - 90 ;
      this.newRotation.emit(this.rotation); 
    }
    
    else if(direction =='r'){
      this.rotation = this.rotation + 90 ;
      this.newRotation.emit(this.rotation);
    }

  }
  
  getRotationChangeEmitter() {
    return this.newRotation;
  }

  //zomm scale
  emitScaleChangeEvent(zoomScaleSelection:string){
    if(zoomScaleSelection == 'page-width'){
      this.zoomScale = 'page-width';
      
      this.newZoomScale.emit(this.zoomScale);
    }
    
    else if(zoomScaleSelection == 'page-fit'){
      this.zoomScale = 'page-fit';
      this.newZoomScale.emit(this.zoomScale);
    }
    
    else if(zoomScaleSelection == 'page-height'){
      this.zoomScale = 'page-height';
      this.newZoomScale.emit(this.zoomScale);
    }

  }

  geZoomScaleChangeEmitter() {
    return this.newZoomScale;
  }
  
}