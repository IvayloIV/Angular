import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IDetailsRecipe } from '../contracts/IDetailsRecipe';
import { IRecipe } from '../contracts/IRecipe';
import { GetAllRecipes, GetRecipeDetails, GetRecipeToEdit } from 'src/app/store/actions/recipes.action';
import { AppState } from 'src/app/store/app.store';

const DOMAIN = 'https://recipes-c7f10.firebaseio.com/recipes/';
const endPoint = '.json';

@Injectable()
export class RecipesService {
    constructor(
        private http: HttpClient,
        private store: Store<AppState>
    ) {}

    getAll() {
        return this.http.get<IDetailsRecipe[]>(DOMAIN + endPoint)
            .pipe(map((values) => {
                const accumulator: IDetailsRecipe[] = [];
                const keys = Object.keys(values);
                for (let key of keys) {
                    accumulator.push({
                        id: key,
                        name: values[key].name,
                        imagePath: values[key].imagePath,
                        description: values[key].description,
                    });
                }
                
                this.store.dispatch(new GetAllRecipes(accumulator));
            }));
    }

    create(body: IRecipe) {
        return this.http.post(DOMAIN + endPoint, body);
    }

    getDetails(id: string) {
        return this.getDetailsInternal(id, (data) => {
            this.store.dispatch(new GetRecipeDetails(data));
        })
    }

    getRecipeToEdit(id: string) {
        return this.getDetailsInternal(id, (data) => {
            this.store.dispatch(new GetRecipeToEdit(data));
        })
    }

    edit(body) {
        return this.http.patch(DOMAIN + endPoint, body);
    }

    remove(id: string) {
        return this.http.delete(DOMAIN + `${id}/${endPoint}`);
    }

    private getDetailsInternal(id: string, callback) {
        return this.http.get<IRecipe>(DOMAIN + `${id}/${endPoint}`)
            .pipe(map((data: IDetailsRecipe) => {
                callback(data);
            }));
    }
}