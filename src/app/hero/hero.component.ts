import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroes = Heroes;
  SelectedHero?: Hero;
  OnSelect(hero: Hero): void {
    this.SelectedHero = hero;
  }
  constructor() {}

  ngOnInit() {}
}
