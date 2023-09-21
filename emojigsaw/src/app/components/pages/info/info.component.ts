import { Component } from '@angular/core';
import { EmojiApiService } from 'src/app/services/emoji-api.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(private rs:EmojiApiService,private router: Router, private hs:HomeComponent){}
header:any="you choose";

emoji=this.hs.a;
}
