import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent implements OnInit {
  hero: Hero;
  promise;
  birthday: Date = new Date(1988, 3, 15);
  myValue = 5;
  constructor(private service: HeroService) { }

  ngOnInit() {
    this.promise = this.service.getHeroAsAPromise();
    this.service.getHeroAsAPromise().then(hero => this.hero = hero).catch(err => console.log(err));
  }

  increaseId(){
    this.hero.id += 1;
  }

  doNothing(){
    console.log('I am doing nothing');
  }

}
