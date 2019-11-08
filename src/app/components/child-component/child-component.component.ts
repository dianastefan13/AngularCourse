import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() param1 : string;
  @Input() param2;
  @Input() param3;
  @Output() iDidIt = new EventEmitter<any>();
  @Output() param1Change = new EventEmitter<any>();
  
  _iHaveAccessors;

  @Input() 
  set iHaveAccessors(iHaveAccessors){
    console.log('Setter called');
    this._iHaveAccessors = iHaveAccessors;
  }
  get iHaveAccessors(){
    return this._iHaveAccessors;
  }

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.param1);
    console.log(this.param2);
    console.log(this.param3);
  }

  childMethod(){
    this.param1Change.emit(this.param1.toUpperCase());
  }
  

}
