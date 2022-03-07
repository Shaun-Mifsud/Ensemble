import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})


export class LocalStorageService {
  constructor() { }
  
  public set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
    
  public get(key: string){ 
    return JSON.parse(localStorage.getItem(key));
  }
  public remove(key:string) {
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear(); 
  }
}