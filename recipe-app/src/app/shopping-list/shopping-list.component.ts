import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient( "Onions", 4),
    new Ingredient( "Lattuce", 5),
    new Ingredient( "Tuna", 3),
  ]

  constructor() { }

  ngOnInit() {
  }

}
