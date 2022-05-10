import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    const hero = Heroes.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) {}
}
