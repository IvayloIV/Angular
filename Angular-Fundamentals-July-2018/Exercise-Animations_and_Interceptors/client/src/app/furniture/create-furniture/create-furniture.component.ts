import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { CreateFurniture } from '../models/create-furniture.model';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  furniture: CreateFurniture;

  constructor(private furnitureService: FurnitureService) {
    this.furniture = new CreateFurniture('', '', '', 0, '', 0, '');
  }

  ngOnInit() {
  }

  create() {
    this.furnitureService.create(this.furniture).subscribe();
  }
}
