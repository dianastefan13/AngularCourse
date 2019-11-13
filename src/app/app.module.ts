import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Params} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


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
import { HeroComponent } from './components/hero/hero.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestPipesComponent } from './components/test-pipes/test-pipes.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { TestFormsComponentComponent } from './components/test-forms-component/test-forms-component.component';
import { CustomValidatorDirective } from './directives/custom-validator.directive';
import { TestReactiveFormComponent } from './components/test-reactive-form/test-reactive-form.component';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TestHttpServiceComponent } from './components/test-http-service/test-http-service.component';
import { RxTestComponent } from './components/rx-test/rx-test.component';
import { TestSubject1Component } from './components/test-subject1/test-subject1.component';
import { TestSubject2Component } from './components/test-subject2/test-subject2.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler{
  handle(params: MissingTranslationHandlerParams){
    return params.key + '__IS NOT SET FOR' + params.translateService.currentLang
  }
}

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
    ChildComponentComponent,
    HeroComponent,
    PageNotFoundComponent,
    TestPipesComponent,
    MyPipePipe,
    TestFormsComponentComponent,
    CustomValidatorDirective,
    TestReactiveFormComponent,
    TestHttpServiceComponent,
    RxTestComponent,
    TestSubject1Component,
    TestSubject2Component
    
  ],
  imports: [
    TranslateModule.forRoot({
      //missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
      useDefaultLang: false,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: "hero/:id", component: HeroComponent},
      {path: "heroes", component: HeroListComponent, data: {title : 'Heroes'}},
      {path: "", component: MyComponent, pathMatch : "full"},
      {path: "**", component: PageNotFoundComponent}
    ], {useHash: true})

  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
