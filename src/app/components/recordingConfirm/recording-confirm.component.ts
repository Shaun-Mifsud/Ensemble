import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnsembleService } from 'src/app/services/ensemble.service';

declare var $: any;


@Component({
  selector: 'app-recording',
  templateUrl: './recording-confirm.component.html',
  styleUrls: ['./recording-confirm.component.scss'],
})
export class RecordingConfirmComponent implements OnInit {

  @Input() currentRecording:any;

  public recordingName:string='';

  constructor(private ensembleSerivce: EnsembleService,
              private modalController: ModalController){}
  
  
  ngOnInit() {
    console.log("current recording in confirm modal: ", this.currentRecording);
  }
  
  ngOnDestroy(){
    this.currentRecording= undefined;
    this.recordingName='';
  }


  confirm(){
    console.log("change: ", this.recordingName);
    this.currentRecording.name= this.recordingName;

    //save
    this.ensembleSerivce.saveRecording("Recordings",this.currentRecording);

    this.modalController.dismiss();

  }
}