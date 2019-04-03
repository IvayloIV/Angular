import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFurniture } from '../contracts/IFurniture';
import { IDetailsFurniture } from '../contracts/IDetailsFurniture';

const BASE_URL = 'http://localhost:5000/furniture/';

@Injectable()
export class FurnitureService {
  constructor(private http: HttpClient) { }

  createFurniture(body: IFurniture) {
    return this.http.post(BASE_URL + 'create', body);
  }

  getAllFurniture(): Observable<IDetailsFurniture[]> {
    return this.http.get<IDetailsFurniture[]>(BASE_URL + 'all');
  }

  getFurnitureDetails(id: string): Observable<IDetailsFurniture> {
    return this.http.get<IDetailsFurniture>(BASE_URL + `details/${id}`);
  }

  getUserFurniture(): Observable<IDetailsFurniture[]> {
    return this.http.get<IDetailsFurniture[]>(BASE_URL + 'user');
  }

  removeFurniture(id: string) {
    return this.http.delete(BASE_URL + `delete/${id}`);
  }

  editFurniture(body: IDetailsFurniture) {
    const id = body._id;
    return this.http.put(BASE_URL + `edit/${id}`, body);
  }
}
