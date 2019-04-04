import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/core/contracts/IRecipe';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  constructor(
    private recipesService: RecipesService,
    private toastr: ToastrService,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  create(values: IRecipe) {
    this.recipesService.create(values)
      .subscribe(
        () => {
          this.toastr.success('Create success.');
          this.route.navigate(['/recipes/list']);
        }, 
        err => this.toastr.error(err.message)
      );
  }
}
