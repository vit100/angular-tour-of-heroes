import { Injectable } from '@angular/core';
import {Hero} from './models/hero';
import {heroes} from './mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('fetched heroes');
    return of(heroes);
  }

  getHero(id: number): Observable<Hero> {
    const hero = heroes.find(h => h.id === id);
    this.messageService.add(`fetched hero ${hero.name}`);
    return of(hero);
  }
}
