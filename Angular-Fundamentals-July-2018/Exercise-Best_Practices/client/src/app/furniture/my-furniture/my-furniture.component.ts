import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../models/furniture.model';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  myFurnitures: Furniture[];
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitureService.getMy()
      .subscribe(data => this.myFurnitures = data);
  }

  remove(id) {
    this.furnitureService.remove(id)
      .subscribe(() => this.myFurnitures = this.myFurnitures.filter(a => a.id !== id));
  }

  changePage(event) {
    this.currentPage = event;
  }
}
