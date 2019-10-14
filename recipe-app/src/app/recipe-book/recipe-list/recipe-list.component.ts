import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: Recipe[] = [
    new Recipe( 'Tuna Salad', 
    'How to make a healthy tuna salad', 
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/1/30/0/FNK_Tuna-Salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1391769187151.jpeg' ),
    new Recipe( 'Chiken & Pinenapple Salad', 
    'How to make a healthy Chiken salad with Pineapples', 
    'https://img.taste.com.au/EgCjN8g2/taste/2018/08/chargrilled-chicken-and-pineapple-salad-140510-3.jpg' )
  ];

  @Output()
  recipeSelect = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
    this.recipeSelect.emit(this.recipeList[0]);
  }

  onRecipeSelect( recipe:Recipe){
    this.recipeSelect.emit(recipe);
  }

}
