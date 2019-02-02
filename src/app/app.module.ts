import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClcksDirective } from './directives/contar-clicks.directive';
import { Routes } from '@angular/router';
const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'lugares', component: AppComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClcksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
