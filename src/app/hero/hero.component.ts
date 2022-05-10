import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { Heroes } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];
  SelectedHero?: Hero;
  OnSelect(hero: Hero): void {
    this.SelectedHero = hero;

    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  constructor(
    private heroservice: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    // this.heroes = this.heroservice.getHeroes();
  }
}
