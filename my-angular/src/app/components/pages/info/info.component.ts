import { Component } from '@angular/core';
import { EmojiApiService } from 'src/app/services/emoji-api.service';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  en:any;
  selected:any;
  constructor(private rs:EmojiApiService,private router: Router, private td:TransferService, private location:Location){}

  ngOnInit(){
    if (this.td.getData()) {
      this.en=this.td.getData();
      this.selected="You choose: ";
    }else{
      this.selected="Random emoji is: ";
      this.en=this.td.getRandom();
    }  
  }

  goBack(): void {
    this.location.back();
  }
}
