import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my-component/my-component.component';
import { MyService } from './services/MyService';
import { MyComponent2Component } from './components/my-component2/my-component2.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { TestIfComponent } from './components/test-if/test-if.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { TestDirectiveComponent } from './components/test-directive/test-directive.component';
import { MyStructuralDirectiveDirective } from './directives/my-structural-directive.directive';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyComponent2Component,
    HeroListComponent,
    TestIfComponent,
    MyDirectiveDirective,
    TestDirectiveComponent,
    MyStructuralDirectiveDirective,
    ParentComponentComponent,
    ChildComponentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
