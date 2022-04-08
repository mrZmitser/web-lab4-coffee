import { NgModule } from '@angular/core';
import { DrinkCenterComponent } from "./drinks/drink-center/drink-center.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: DrinkCenterComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
