import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FindEmojiComponent } from './components/pages/find-emoji/find-emoji.component';
import { InfoComponent } from './components/pages/info/info.component';

const routes: Routes = [
  {
  path:"home",
  component:HomeComponent
},
{
  path:"find-emoji",
  component:FindEmojiComponent
},
{
  path:"info",
  component:InfoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
