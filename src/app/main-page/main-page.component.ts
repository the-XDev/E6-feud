import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private gameService : GameService,private router : Router) { }

  ngOnInit(): void {
  }

  startGame(nsfw : boolean) {
    this.gameService.startGame(nsfw);
    this.router.navigate(['/play']);
  }

}
