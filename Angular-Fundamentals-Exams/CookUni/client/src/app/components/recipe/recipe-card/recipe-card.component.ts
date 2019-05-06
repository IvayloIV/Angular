import { Component, Input } from '@angular/core';
import { RecipeInfo } from 'src/app/core/models/recipe/recipe-info.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipe: RecipeInfo;
}
