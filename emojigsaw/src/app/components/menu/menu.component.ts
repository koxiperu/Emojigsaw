import { Component } from '@angular/core';
import { EmojiApiService } from 'src/app/services/emoji-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  randEm:any=null;
  constructor(private rs:EmojiApiService){}
   ngOnInit(){
     this.rs.getRandomE().subscribe((res)=>{
       this.randEm=res;
     })
   }
}
