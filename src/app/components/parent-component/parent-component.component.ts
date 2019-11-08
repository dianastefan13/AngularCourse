import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  firstParam = 'myFirstParam';
  secondParam = 'mySecondParam';
  parentCompoenentProperty = "My parent component property!";
  propertyFromAccessor = 'test accessor value';
  constructor() { }

  ngOnInit() {
  }

  iDidItEvent(param){
    console.log(`The event was called ${param}`);
  }

  doSomething(){
    this.propertyFromAccessor = "new value from poperty";
  }

}
