import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../models/hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    const id: number = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this._heroService
    .getHero(id)
    .subscribe(h => this.hero = h);
  }

  goBack(): void {
      this.location.back();
  }

}
