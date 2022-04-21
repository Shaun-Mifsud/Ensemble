import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})


export class LocalStorageService {
  constructor() { }
  
  public set(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    }

    catch (e) {
        console.log("Local Storage is full, Please empty data",e);
        // fires When localstorage gets full
        // you can handle error here or empty the local storage
    }
    
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