import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeroService } from 'src/app/services/hero.service';

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
          Validators.minLength(3)
        ],
      }
      ], id: [this.hero.id]
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

}
