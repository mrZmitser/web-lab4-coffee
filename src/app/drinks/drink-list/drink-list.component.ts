import { Component, OnInit } from '@angular/core';
import {Drink} from "../services/drink";
import {drinks} from "../services/mock-drink-list";

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
  drinks: Drink[] = [];
  drink: Drink = new Drink()
  i = drinks.length

  constructor() { }

  ngOnInit(): void {
    this.drinks = [];
    this.drink = new Drink()
  }

  onSubmitTemplateBased() : void {
    this.drink.id = this.i;
    this.i++;
    this.drinks.push(DrinkListComponent.cloneDrink(this.drink));
  }

  private static cloneDrink(drink: Drink) {
    const newDrink = new Drink()
    newDrink.id = drink.id
    newDrink.cost = drink.cost
    newDrink.name = drink.name
    return newDrink
  }
}
