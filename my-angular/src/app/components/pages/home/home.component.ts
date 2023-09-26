import { Component } from '@angular/core';
import { EmojiApiService } from 'src/app/services/emoji-api.service';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  emojiArray:any=[];
  emojiPic:any=[];
  constructor(private rs:EmojiApiService,private router: Router, private td:TransferService){}
  ngOnInit(){
    this.rs.getAllEmoji().subscribe((res)=>{
      this.emojiArray=res;
    })
  }
  openInfo(em:any){ 
    this.td.setData(em);
    return this.router.navigate(['/info']);          
  }
}
