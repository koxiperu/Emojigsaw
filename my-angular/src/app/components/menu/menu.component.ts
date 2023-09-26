import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmojiApiService } from 'src/app/services/emoji-api.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  randEm:any=null;
  constructor(private rs:EmojiApiService, private td:TransferService, private router:Router){}
  ngOnInit(){
     this.rs.getRandomE().subscribe((res)=>{
       this.randEm=res;
       this.td.setRandom(this.randEm);
     });
     
   }

  openInfo(em:any){
    this.td.setData(em);
    return this.router.navigate(['/info']);
  }
}
