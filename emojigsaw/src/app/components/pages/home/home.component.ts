import { Component } from '@angular/core';
import { EmojiApiService } from 'src/app/services/emoji-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  emojiArray:any=[];
  emojiPic:any=[];
  a:any;
  constructor(private rs:EmojiApiService,private router: Router){}
  ngOnInit(){
    this.rs.getAllEmoji().subscribe((res)=>{
      this.emojiArray=res;
    })
  }
  openInfo(em:any){
    this.router.navigate(["/info"]);
    
    this.a=em;

      
  }
}
