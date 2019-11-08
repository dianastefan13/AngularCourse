import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    
    this.heroes = heroService.getHeroList();
    // heroes.forEach(element => {
    //   console.log(element.name + ' - ' + element.id);
    // });
  }

  ngOnInit() {
  }

}
