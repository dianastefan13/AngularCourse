import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-test-http-service',
  templateUrl: './test-http-service.component.html',
  styleUrls: ['./test-http-service.component.css']
})
export class TestHttpServiceComponent implements OnInit {
  heroes
  shouldDisplayMyForm : boolean = false;
  @ViewChild("myForm", {static : true})
  myForm: NgForm

  @ViewChild("myNameInput", {static : true})
  myNameInput

  @ViewChild("myIdInput", {static : true})
  myIdInput

  constructor(private httpService: HttpServiceService) {
    this.httpService.getHeroes().subscribe((result : any )=> {
      this.heroes = result.heroes;
    });
   }

   createHero(){
    this.shouldDisplayMyForm = true;
   }

   submitMyForm(){
    this.httpService.createHero({"name" : "Created Hero New", "id" : 11});
   }

  ngOnInit() {
  }

}
