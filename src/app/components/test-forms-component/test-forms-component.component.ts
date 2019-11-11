import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero.service';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-test-forms-component',
  templateUrl: './test-forms-component.component.html',
  styleUrls: ['./test-forms-component.component.css']
})
export class TestFormsComponentComponent implements OnInit {
  hero: Hero;

  @ViewChild("myForm", {static : true})
  myForm: NgForm

  @ViewChild("myNameInput", {static : true})
  myNameInput

  @ViewChild("myIdInput", {static : true})
  myIdInput

  constructor(private service: HeroService) {
    this.hero = service.getHeroes(1);
   }

  ngOnInit() {
    console.log(this.myForm);
    console.log(this.myNameInput);
    console.log(this.myIdInput);
  }

  submitMyForm(){
    console.log(this.hero);
    console.log(this.myForm);
    console.log(this.myNameInput.errors);
    console.log(this.myIdInput.errors);

  }

}
