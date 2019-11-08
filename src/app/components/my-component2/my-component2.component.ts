import { Component, OnInit } from '@angular/core';
import { MyModel } from 'src/app/model/my-model';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css']
})
export class MyComponent2Component implements OnInit {

  constructor(private service: MyServiceService) { 
    this.myModel = new MyModel();
    this.myModel.message = 'Hello World from component 2!';
    this.messageFromService = this.service.getMyModel().message;
  }

  myModel: MyModel;
  messageFromService: string;

  ngOnInit() {
   
  }

}
