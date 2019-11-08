import { Component } from '@angular/core';
import { PlayWithTsService } from './services/play-with-ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private playWithTsService: PlayWithTsService) {
    
  }
  title = 'curs-angular-project';
  message: string = 'Hello world - 2!';
}
