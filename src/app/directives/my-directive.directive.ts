import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[giveMeColor]'
})
export class MyDirectiveDirective {
  @Input("giveMeColor") colorDirective

  @Input("color") colorParam
  @Input("transparency") transparencyParam

  constructor(private el: ElementRef) { 
    //this.el.nativeElement.style.backgroundColor = this.colorParam;
    console.log('My directive works');
  }

  @HostListener("mouseover")
  onMouseOver(){
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.fontSize = this.transparencyParam + 'px';
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'purple';
  }

}
