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


  rotateLeft(){
    console.log("rotate left");
    
    this.tools.emitRotationChangeEvent('l',this.rotation);
    
  }
  
  rotateRight(){
    this.tools.emitRotationChangeEvent('r',this.rotation);
  }

  
}
