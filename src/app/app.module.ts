import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainGameComponent } from './main-game/main-game.component';
import { TagsSidebarComponent } from './tags-sidebar/tags-sidebar.component';
import { TagComponent } from './tag/tag.component';
import {HttpClientModule } from "@angular/common/http";
import { ImageDisplayComponent } from './image-display/image-display.component';
import { GuessAreaComponent } from './guess-area/guess-area.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainGameComponent,
    TagsSidebarComponent,
    TagComponent,
    ImageDisplayComponent,
    GuessAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
