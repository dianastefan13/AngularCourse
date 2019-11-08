import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero : Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>
      this.hero = this.heroService.getHeroes(params['id']));
  }

  back(){
    this.location.back();
  }

}
