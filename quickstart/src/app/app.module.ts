import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import {MyComponent} from './myComponent/MyComponent'
import {myConter} from './myComponent/Conter'
import {HiAngular} from './myComponent/HiAngular'

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,MyComponent,myConter,HiAngular ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
