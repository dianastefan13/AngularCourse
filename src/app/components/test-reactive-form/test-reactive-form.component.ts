import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HeroService } from 'src/app/services/hero.service';
import { of } from 'rxjs'

@Component({
  selector: 'app-test-reactive-form',
  templateUrl: './test-reactive-form.component.html',
  styleUrls: ['./test-reactive-form.component.css']
})
export class TestReactiveFormComponent implements OnInit {
  form: FormGroup

  hero: Hero;

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService
  ) {
    this.hero = this.heroService.getHeroes(1);
    console.log();
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.hero.name,
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          this.rejectNameValidator('angular')
        ],
      }
      ], id: [this.hero.id]
    }, {
      validators : [this.crossFieldValidator()],
      //asyncValidators : [this.httpAsyncValidator.bind(this)]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      let hero = new Hero();
      hero.name = this.form.controls.name.value;
      hero.id = this.form.controls.id.value;
      console.log('Save hero' + JSON.stringify(hero));
    }
    else {
      console.log(this.form.errors);
      console.log(this.form.controls.name.errors);


    }
  }

  rejectNameValidator(nameRejected: string){
    return(control: AbstractControl) => {
        const name = control.value;
        let containsRejected = false;
        if(name.indexOf(nameRejected) >= 0){
          containsRejected = true;
        }
        return containsRejected ? {"rejectedName" : {name}} : null;

    }
  }

  crossFieldValidator() {
    return (control: FormGroup) => {
      const name = control.get("name").value
      const id = control.get("id").value
      return name == id ? {"crossFields" : {"error" : "Your inputs must be different"}} : null;

    }
  }

  httpAsyncValidator(control: FormGroup){
    let hero = new Hero();
    hero.name = control.get('name').value
    hero.id = control.get('id').value
    if(hero.name == 'HeroTest'){
      return of({"Hero name is wrong" : hero.name})
    }
    return null
  }

}
