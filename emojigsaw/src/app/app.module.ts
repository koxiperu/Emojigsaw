import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { FindEmojiComponent } from './components/pages/find-emoji/find-emoji.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './components/pages/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FindEmojiComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
