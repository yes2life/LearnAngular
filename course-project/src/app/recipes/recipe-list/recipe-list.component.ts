import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
  recipes: Recipe[] = [
      new Recipe(
        'A Test Recipe',
        'This is simply a test',
        'https://p1.pxfuel.com/preview/217/260/0/zucchini-summer-squash-food-recipe-delicious-breakfast.jpg'
      ),
      new Recipe(
        'A Korean Recipe',
        'Kimchi',
        'https://p1.pxfuel.com/preview/217/260/0/zucchini-summer-squash-food-recipe-delicious-breakfast.jpg'
      ),
    ];
  
  constructor() {
    // console.log(this.recipes.toString);
  }
}
