import { Component } from '@angular/core';
import { EmojiApiService } from 'src/app/services/emoji-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-emoji',
  templateUrl: './find-emoji.component.html',
  styleUrls: ['./find-emoji.component.css']
})
export class FindEmojiComponent {
emojiTypes:any=[
  {
    category: "smileys-and-people",
    groups:["body", "cat-face", "clothing", "creature-face", "emotion", "face-negative", "face-neutral", "face-positive", "face-positive", "face-role", "face-sick", "family", "monkey-face", "person", "person-activity", "person-gesture", "person-role", "skin-tone"]
  },
  {
    category: "animals-and-nature",
    groups:["animal-amphibian", "animal-bird", "animal-bug", "animal-mammal", "animal-marine", "animal-reptile", "plant-flower", "plant-other"]
  }, 
  {
    category: "food-and-drink",
    groups:["dishware", "drink", "food-asian", "food-fruit", "food-prepared", "food-sweet", "food-vegetable"]
  }, 
  {
    category: "travel-and-places",
    groups:["travel-and-places"]
  },
  {
    category: "activities",
    groups:["activities"]
  },
  {
    category: "objects",
    groups:["objects"]
  },
  {
    category: "symbols",
    groups:["symbols"]
  },
  {
    category: "flags",
    groups:["flags"]
  }];
  emojiCatArray:any=[];
  selectedGroups:any=[];
  selectedCat="";
  selectedGrs=[];
  selectedGr="";
  selectedCategory={
    category:this.selectedCat,
    groups:this.selectedGrs};

  // selectedCategory(){
  //   for (let i=0; i<this.emojiTypes.lenth;i++){
  //     if ([#category.selected]==this.emojiTypes[i].category){
  //       this.selectedGroups=this.emojiTypes[i].groups;
  //     }
  //   }
  // }
  loadGroups(){
    console.log(this.selectedCat);
       for (let i=0;i<this.emojiTypes.length;i++){
       if (this.emojiTypes[i].category==this.selectedCat){
     this.selectedCategory.category=this.selectedCat;
     this.selectedCategory.groups=this.emojiTypes[i].groups;
   };
       }
    };

  constructor(private rs:EmojiApiService , private router: Router){}  
    
  showEmoji(){
    if (this.selectedGr==""){
      this.rs.getCatEmoji(this.selectedCat).subscribe((res)=>{
        this.emojiCatArray=res;
      
      })
    }else{
      this.rs.getGrEmoji(this.selectedGr).subscribe((res)=>{
        this.emojiCatArray=res;
    })
  }  
  }

  openInfo(){
    this.router.navigate(["/info"]);
  
  }
}
  

