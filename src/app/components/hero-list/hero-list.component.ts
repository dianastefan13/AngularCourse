import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/model/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService, private router: Router) {
    this.heroes = heroService.getHeroList();
  }

  ngOnInit() {
  }

  navigateToHero(heroId: number){
    this.router.navigate(['/hero', heroId]);
  }

}
