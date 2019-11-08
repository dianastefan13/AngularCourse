import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myAppNif]'
})
export class MyStructuralDirectiveDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewConainerRef: ViewContainerRef) {
      console.log(templateRef);
      console.log(viewConainerRef);
     }

  @Input("myAppNif")
  set myAppNifValue(value){
    if(value){
      this.viewConainerRef.clear();
    }else{
      this.viewConainerRef.createEmbeddedView(this.templateRef);
    }
  }
  

}
