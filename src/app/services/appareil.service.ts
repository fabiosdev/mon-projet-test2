import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }
  switchOnOne(i: number){ //Allume un seul appareil en fonction de son index
    this.appareils[i].status = 'allumé';
  }
  switchOffOne(i: number){ //Éteint un seul appareil en fonction de son index
    this.appareils[i].status = 'éteint';
  }

  constructor() { }
}
