import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDetailsRecipe } from '../contracts/IDetailsRecipe';
import { IRecipe } from '../contracts/IRecipe';

const DOMAIN = 'https://recipes-c7f10.firebaseio.com/recipes/';
const endPoint = '.json';

@Injectable()
export class RecipesService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<IDetailsRecipe[]> {
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
                return accumulator;
            }));
    }

    create(body: IRecipe) {
        return this.http.post(DOMAIN + endPoint, body);
    }

    getDetails(id: string): Observable<IRecipe> {
        return this.http.get<IRecipe>(DOMAIN + `${id}/${endPoint}`);
    }

    edit(body) {
        return this.http.patch(DOMAIN + endPoint, body);
    }

    remove(id: string) {
        return this.http.delete(DOMAIN + `${id}/${endPoint}`);
    }
}