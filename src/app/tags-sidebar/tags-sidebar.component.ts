import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-tags-sidebar',
  templateUrl: './tags-sidebar.component.html',
  styleUrls: ['./tags-sidebar.component.scss']
})
export class TagsSidebarComponent implements OnInit {

  constructor(public gameService : GameService) { }

  ngOnInit(): void {
  }

}
