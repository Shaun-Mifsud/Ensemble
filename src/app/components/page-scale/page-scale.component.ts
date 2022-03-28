import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ScorePage } from 'src/app/score/score.page';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-page-scale',
  templateUrl: './page-scale.component.html',
  styleUrls: ['./page-scale.component.scss'],
})
export class PageScaleComponent implements OnInit {

  constructor(public tools:ToolsService){

  }

  @Input() rotation:number;

  @Output() newRotation= new EventEmitter();

  ngOnInit() { }



  rotateLeft(){
    this.newRotation.emit({rotation: this.rotation - 90})
    //this.tools.getRotation(this.rotation  - 90);
  }
  
  rotateRight(){
    this.newRotation.emit({rotation: this.rotation + 90})
    //this.tools.getRotation(this.rotation  + 90);

  }
}
