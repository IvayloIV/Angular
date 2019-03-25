import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Furniture } from './models/furniture.model';
import { CreateFurniture } from './models/create-furniture.model';

const BASE_URL = 'http://localhost:8000/furniture/';

@Injectable()
export class FurnitureService {

  constructor(private http: HttpClient) { }

  create(body: CreateFurniture): Observable<object> {
    return this.http.post(BASE_URL + 'create', body);
  }

  getAll(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(BASE_URL + 'all');
  }

  getDetails(id: string): Observable<Furniture> {
    return this.http.get<Furniture>(BASE_URL + `details/${id}`);
  }

  getMy(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(BASE_URL + `mine`);
  }

  remove(id): Observable<object> {
    return this.http.delete(BASE_URL + `delete/${id}`);
  }

  getFurnitureById(id: number): Observable<Furniture> {
    return this.http.get<Furniture>(BASE_URL + id);
  }

  edit(id: number, body: Furniture): Observable<object> {
    return this.http.put(BASE_URL + `edit/${id}`, body);
  }
}
