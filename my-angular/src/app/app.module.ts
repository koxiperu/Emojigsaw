import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FindEmojiComponent } from './components/pages/find-emoji/find-emoji.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoComponent } from './components/pages/info/info.component';
import { FormsModule } from '@angular/forms';
import { PickerModule} from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FindEmojiComponent,
    HomeComponent,
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
