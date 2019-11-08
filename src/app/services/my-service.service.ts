import { Injectable } from '@angular/core';
import { MyModel } from '../model/my-model';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  getMyModel()
  {
    let myModel: MyModel;
    myModel = new MyModel();
    myModel.message = 'Hello world from my service 2!'
    return myModel;

  }

}
