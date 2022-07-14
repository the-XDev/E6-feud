import { Component } from '@angular/core';
import { LoadingStatusService } from './loading-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e6-feud';

  constructor(public loadingState : LoadingStatusService) {
  }
}
