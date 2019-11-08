import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroList(): Hero[]{
    let hero1 = new Hero('Hero1', 1);
    let hero2 = new Hero('Hero2', 2);
    let hero3 = new Hero('Hero3', 3);
    let hero4 = new Hero('Hero4', 4);
    let heroes: Hero[] = [hero1, hero2, hero3, hero4];
    
    return heroes;
  }
}
