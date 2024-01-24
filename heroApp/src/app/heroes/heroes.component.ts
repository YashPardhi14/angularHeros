import { Component, NgModule } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heros';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,CommonModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  
 heroes:Hero[]=[];
 selectedHero?:Hero;

 onSelect(hero:Hero){
  this.selectedHero=hero;
 }
}
