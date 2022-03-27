import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

import Embed from 'flat-embed';
import { MetronomeComponent } from '../components/metronome/metronome.component';
import { PageScaleComponent } from '../components/page-scale/page-scale.component';

import { RecordingPopComponent } from '../components/recording-pop/recording-pop.component';
import { TunerComponent } from '../components/tuner/tuner.component';
import { EnsembleService } from '../services/ensemble.service';
import { Part, Score } from '../struct/ensemble';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  public scoreID:any;
  public partID:any;

  public selectedScore: Score | undefined;
  public selectedPart: Part | undefined;

  public pdfSrc: any;
  public rotation:number = 0;

  constructor(private route:ActivatedRoute,
              public ensembleService:EnsembleService,
              public popoverController:PopoverController,
              private modalCtrl:ModalController,
            ) { }

  ngOnInit() {
    //get ID the user selected from URL
    this.scoreID=parseInt(this.route.snapshot.params['scoreID']);
    

    //get score by scoreID
    this.selectedScore=this.ensembleService.getScoreByID(this.scoreID);

    if(this.route.snapshot.params['scorePart']){ 
      //get part by URL
      this.partID=parseInt(this.route.snapshot.params['scorePart']);
      console.log('PARTID: ', this.partID);

      this.selectedPart = this.selectedScore.parts[this.partID]; // <-- can this be an issue since the index and partID is 1 number different ?
      

      if(this.selectedScore.type == "static"){
        console.log("static score");
        //set PDF source by partPath
        this.pdfSrc=this.selectedPart.partPath;
        console.log("Selected score: ", this.selectedScore);
        
      } 
  }
        
    
    if(this.selectedScore.type == "interactive"){
      console.log("interactive score");
      
      const container = document.getElementById('sheetmusic');
      const embed = new Embed(container, {
        embedParams: {
          appId: '59e7684b476cba39490801c2',
          controlsPosition: 'top',
          layout:'responsive',
          videoPosition:'top',
          branding:'false',
          controlDisplay:'true',
          controlsParts:'true',
          themePrimary:'#0B1A33'
  
        }
      });
  
      fetch(this.selectedScore.fullScorePath)
      .then(response => response.text())
      .then(xml => embed.loadMusicXML(xml))
      .then(() => embed.setTrack(
        {
          id: 'aflat',
          type: 'youtube',
          mediaId: 'Hv4Jylc_Kq4',
          synchronizationPoints: [
            { type: 'measure', time: 5, location: { measureIdx: 0 }},
            { type: 'end', time: 58 }
          ],
        }
      ))
      
      .then(() => embed.useTrack({ id: 'aflat' }))
      .catch(error => console.error(error));
    }
    
  }
  //recording popover
  async recordingPopover(ev:any) {
    const popover = await this.popoverController.create({
      component: RecordingPopComponent,
      componentProps: {scoreID:this.scoreID, selectedPart:this.selectedPart},
      cssClass: 'recordingPopover',
      event:ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
  // metronome modal
  async showMetornomeModal(){
    const modal = await this.modalCtrl.create({
      component:MetronomeComponent,
      cssClass:'metronomeModal',
    })

    await modal.present();
  }

  //tuner modal
  async showTunerPopover(ev:any){
    const popover = await this.popoverController.create({
      component: TunerComponent,
      cssClass: 'tunerPopover',
      event:ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //page options
  async pageOptions(ev:any){
    const popover = await this.popoverController.create({
      component: PageScaleComponent,
      componentProps:{rotation: this.rotation},
      cssClass: 'pageScalePopover',
      event:ev,
      translucent: true,
    });
    await popover.present();
  

  
  }
  //rotate
  updateRotation(event){
    console.log("updateRotation(event)");
    
    this.rotation= event.rotation;
  }

  
}