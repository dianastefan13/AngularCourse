import { Injectable } from '@angular/core';
import { TestTypes } from '../play-with-ts/TestTypes';
import { MyInterface, MyClass } from '../MyInterface';
import { TestFunctionClass } from '../TestFunctionClass';
import { Promises } from '../Promises';

@Injectable({
  providedIn: 'root'
})
export class PlayWithTsService {

  constructor() {
    console.log('Play With TS Service constructor called!');
    let testType : TestTypes = new TestTypes();

    let myInterface: MyInterface = new MyClass();
    (<MyClass>myInterface).myFirstMethod();

    let myVariable = () => {console.log('This is my arrow function')};
    let myFunction : () => void = myVariable;
    myFunction();

    let myNestedFunctions: TestFunctionClass = new TestFunctionClass();
    myNestedFunctions.myMethod();

    let promis: Promises = new Promises();
   }
}
