import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})

export class imageComponent implements OnInit {

  @Input() eventImage: string;

  
  ngOnInit() {

  }


  constructor() {
  }

}
  

