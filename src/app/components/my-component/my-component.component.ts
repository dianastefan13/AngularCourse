import { Component } from '@angular/core';
import { MyService } from 'src/app/services/MyService';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
    constructor(private service: MyService) { 
        this.message = this.service.getHW();
    }
  title = 'curs-angular-project';
  message: string;
}
