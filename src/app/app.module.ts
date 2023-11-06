import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuemSouEuComponent } from './quem-sou-eu/quem-sou-eu.component';
import { OQueFacoComponent } from './oque-faco/oque-faco.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    QuemSouEuComponent,
    OQueFacoComponent,
    HobbiesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
