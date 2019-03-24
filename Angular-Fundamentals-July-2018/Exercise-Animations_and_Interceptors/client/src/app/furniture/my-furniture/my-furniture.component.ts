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

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitureService.getMy()
      .subscribe(data => this.myFurnitures = data);
  }

  remove(id) {
    this.furnitureService.remove(id)
      .subscribe(() => this.myFurnitures = this.myFurnitures.filter(a => a.id !== id));
  }
}
