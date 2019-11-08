import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-if',
  templateUrl: './test-if.component.html',
  styleUrls: ['./test-if.component.css']
})
export class TestIfComponent implements OnInit {
  shown: boolean = true;
  someTextNew: string = 'This should not be displayed';
  colspanValue = 2;
  inputValue = 'type a value here';
  myTestEnum: MyTestEnum[] = [MyTestEnum.One, MyTestEnum.Two, MyTestEnum.Three, MyTestEnum.Four, MyTestEnum.Five]
  classesArray = ['class1', 'class2'];
  fieldToDisplaySize = false;
  objectClass = {'class1': false, 'class2': true};
  myStyles = {
    'background-color': 'red',
    'height': '100px',
    'width': '100px'
    }
  constructor() { }

  ngOnInit() {
  }

  isShown(){
    return this.shown;
  }

  doSomething(event){
    console.log(event);
    alert(event.type);
  }
}

export enum MyTestEnum {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5
}
