import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { IRecipe } from 'src/app/core/contracts/IRecipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id: string;
  recipe: IRecipe;

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.recipe = this.activatedRoute.snapshot.data['getDetails'];
  }

  remove() {
    this.recipeService.remove(this.id)
      .subscribe(() => {
        this.toastr.success('Removed success.');
        this.route.navigate(['/recipes/list']);
      });
  }

}
