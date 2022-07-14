import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {

  constructor(private gameService : GameService) {
    if (!gameService.gameRunning){
      gameService.startGame(false);
    }
   }

  ngOnInit(): void {
  }

}
