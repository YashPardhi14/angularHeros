import { Component, NgModule, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heros';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,CommonModule,HeroDetailComponent,MatProgressSpinnerModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  providers:[HttpClient]
})
export class HeroesComponent implements OnInit{
constructor(private heroService:HeroService,private messageService: MessageService){}
  
  heroes :Hero[]|undefined=[];

  arrayList:number[]=[];

  //#####Old Way....
  // getHeroes():void{
  //   this.heroes=this.heroService.getHeroes();
  // }

  getHeroes():void{
     this.heroService.getHeroes().subscribe(
      heroes=>this.heroes=heroes
     )

     /*
The new version waits for the Observable to emit the array of heroes, 
which could happen now or several minutes from now. 
The subscribe() method passes the emitted array to the callback, 
which sets the component's heroes property.

     */
  }

  ngOnInit():void{
this.getHeroes();

  }

  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
