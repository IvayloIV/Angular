import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IDetailsRecipe } from 'src/app/core/contracts/IDetailsRecipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: IDetailsRecipe[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.route.snapshot.data['getAll'];
  }

}
