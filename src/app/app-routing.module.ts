import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuemSouEuComponent} from "./quem-sou-eu/quem-sou-eu.component";
import {OQueFacoComponent} from "./oque-faco/oque-faco.component";
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";



const routes: Routes = [
  {component:QuemSouEuComponent, path:'aboutme'},
  {component:OQueFacoComponent, path:'mywork'},
  {component:HobbiesComponent, path:'hobbies'},
  {component:AppComponent, path:''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
