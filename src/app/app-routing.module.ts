import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGameComponent } from './main-game/main-game.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'play',component: MainGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
