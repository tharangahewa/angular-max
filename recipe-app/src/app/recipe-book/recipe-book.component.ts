import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  selectedRecipe: Recipe;

  onRecipeSelect(recipe: Recipe) {
    console.log( JSON.stringify(recipe));
    this.selectedRecipe = recipe;
  }

  constructor() { }

  ngOnInit() {

  }

}
