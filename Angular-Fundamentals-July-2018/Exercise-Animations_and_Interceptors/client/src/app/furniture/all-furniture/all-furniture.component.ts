import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Furniture[];

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitureService.getAll()
      .subscribe(data => {
        this.furnitures = data;
      })
  }
}
