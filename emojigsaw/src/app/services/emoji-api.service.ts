import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmojiApiService {
  link:string="";

  constructor(private http:HttpClient) { }
getAllEmoji() { //https://emojihub.yurace.pro/api/all
  return this.http.get("https://emojihub.yurace.pro/api/all");
}

getCatEmoji(category:string){
  this.link="https://emojihub.yurace.pro/api/all/category/"+category;
  return this.http.get(this.link);  
}
getGrEmoji(group:string){
  this.link="https://emojihub.yurace.pro/api/all/group/"+group;
  return this.http.get(this.link);  
}

getRandomEC(category:string){
  this.link="https://emojihub.yurace.pro/api/random/category/"+category;
  return this.http.get(this.link);
}
getRandomEG(group:string){
  this.link="https://emojihub.yurace.pro/api/random/group/"+group;
  return this.http.get(this.link);
}
getRandomE(){
  return this.http.get("https://emojihub.yurace.pro/api/random");
}

showChoosenEmoji(){
  
}
}