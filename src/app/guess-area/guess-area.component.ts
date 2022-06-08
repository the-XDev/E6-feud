import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-guess-area',
  templateUrl: './guess-area.component.html',
  styleUrls: ['./guess-area.component.css']
})
export class GuessAreaComponent implements OnInit {

  currentTypedGuess = "";
  lastMatched="";
  
  constructor(public gameService : GameService) {
      
   }

  ngOnInit(): void {
  }

  tryGuess(){
    if (this.gameService.tries_left<=0 || this.gameService.sauceShown) {
      return;
    }
    var guess = this.gameService.searchAndShowTag(this.currentTypedGuess);
    this.currentTypedGuess="";
    if (guess.length>0){
      this.lastMatched="Last correct guess: "+guess.join(", ");
    }else{
      this.lastMatched="";
      this.gameService.tries_left--;
    }
    
  }

  playAgain(){
    this.lastMatched="";
    this.gameService.startGame(false);
  }

}
