import { Component, OnInit } from '@angular/core';
import Embed from 'flat-embed';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {

  //PDF
  pdfSrc = "assets/pdf/aflat.pdf";

  constructor() { }

  ngOnInit() {
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

    fetch('/assets/musicXML/G_Minor.xml')
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
