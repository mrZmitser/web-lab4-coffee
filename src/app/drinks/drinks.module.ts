import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkCenterComponent } from './drink-center/drink-center.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { DrinksRoutingModule } from './drinks-routing.module';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DrinkCenterComponent,
    DrinkListComponent,
    DrinkDetailsComponent
  ],
    imports: [
        CommonModule,
        DrinksRoutingModule,
        FormsModule
    ]
})
export class DrinksModule { }
