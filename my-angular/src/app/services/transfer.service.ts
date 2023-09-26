import { Injectable } from '@angular/core';
import { HomeComponent } from '../components/pages/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  sharedData:any;
  nonSelected:any;
  setData(data: any) {
    this.sharedData = data;
  }
  setRandom(data:any) {
    this.nonSelected = data;
  }
  getData() {
    return this.sharedData;
  }
  getRandom(){
    return this.nonSelected;
  }
}
