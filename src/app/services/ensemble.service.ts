import { ComponentFactoryResolver, Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

import { Ensemble, Event, EventHasScore, Part, Score, User } from '../struct/ensemble';

import { SCORES } from '../struct/data/scores.data';
import { ENSEMBLES } from '../struct/data/ensemble.data';
import { USERS } from '../struct/data/user.data';
import { EVENTS } from '../struct/data/events.data';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class EnsembleService extends BaseService {

  private STORAGE_KEY: string = "Events";

  public ensemble: Ensemble[] = ENSEMBLES;
  public event: Event[] = [];
  public score: Score[] = SCORES;  
  public user: User[] = USERS;
  public part: Part[]= [];

  public eventCount:number;

  async init()
  {
    this.event = await this.localStorageService.get(this.STORAGE_KEY) || EVENTS;
  }


  constructor(private localStorageService: LocalStorageService) {
    super();
  }

  //Ensemble
  getEnsembleByID(IDvalue: number): any | undefined
  {
    if(this.ensemble.find(e => e.id == IDvalue)){
      return this.ensemble.find(e => e.id == IDvalue);
    }
    
    else{
      return false;
    }
  }

  //Event
  getEventByID(IDvalue: number): Event | undefined
  {
    return this.event.find(e => e.id == IDvalue);
  }

  getEventsByScoreID(IDvalue: number): Event[] | undefined{
    var sample: EventHasScore[] = [ { eventID: 1, scoreID: 3 } ];
    const values = sample.filter(e => e.scoreID == IDvalue).map(e => e.eventID);
    
    return this.event.filter(s => values.indexOf(s.id) > -1);
  }

  getEventsByEnsembleID(IDvalue: number): any
  {    
    return this.event.filter(e => e.ensembleID == IDvalue);
  }

  getEventsLengh(): number{
    return this.eventCount = Object.keys(this.event).length;
  }

  //Score
  getScoreByID(IDvalue: Number): Score | undefined
  {
    return this.score.find(s => s.id == IDvalue);
  }

  getScoresByEnsembleID(IDvalue: number): any
  {    
    return this.score.filter(e => e.ensembleID == IDvalue);
  }
  
  //User
  getUserByID(IDvalue: number): User | undefined
  {
    return this.user.find(u => u.id == IDvalue);
    
  }


  //Saving 
  async save(eventPosition:string, newEvent:Event)
  {
    //add the new event
    this.event.push(newEvent);
    console.log("Before NEW: ", this.event);
    
    // write to local storage
    this.localStorageService.set((eventPosition.toString()), this.event);
    console.log("After NEW, EVENT ID 5: " + this.localStorageService.get("5"));
    
  }

}
