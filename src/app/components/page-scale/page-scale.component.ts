import { Component, Input, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-page-scale',
  templateUrl: './page-scale.component.html',
  styleUrls: ['./page-scale.component.scss'],
})
export class PageScaleComponent implements OnInit {
  
  @Input() rotation:number;
  subscription: any; 

  constructor(public tools:ToolsService){

  }


  ngOnInit() { 

  }


  //rotation
  rotateLeft(){
    console.log("rotate left");
    
    this.tools.emitRotationChangeEvent('l');
    
  }
  
  rotateRight(){
    this.tools.emitRotationChangeEvent('r');
  }

  //zoom scale
  zoomScale(selection:string){
    this.tools.emitScaleChangeEvent(selection);
    
  }

  
}
