import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as routerModule from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';


const routes: routerModule.Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    routerModule.RouterModule.forRoot(routes)
  ],
  exports: [
    routerModule.RouterModule
  ]
})
export class AppRoutingModule { }
