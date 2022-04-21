import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';


//components
import { AppComponent } from './app.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { RecordingPopComponent } from './components/recording-pop/recording-pop.component';
import { MetronomeComponent } from './components/metronome/metronome.component';
import { PageScaleComponent } from './components/page-scale/page-scale.component';
import { TunerComponent } from './components/tuner/tuner.component';

import { FormsModule } from '@angular/forms';
import { EnsembleService } from './services/ensemble.service';
import { BaseService } from './services/base.service';





@NgModule({
    declarations: [AppComponent, NewEventComponent, RecordingPopComponent,MetronomeComponent,PageScaleComponent,TunerComponent],
    imports: [BrowserModule, IonicModule.forRoot({ mode: 'md' }), AppRoutingModule, FormsModule, ComponentsModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        {
            provide: APP_INITIALIZER,
            deps: [EnsembleService],
            multi: true,
            useFactory: providerFactory
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function providerFactory(provider: BaseService) {
    return () => provider.init();
}