import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  constructor(public gameService : GameService) { }

  ngOnInit(): void {
  }

}
