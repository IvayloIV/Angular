import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { Furniture } from '../models/furniture.model';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  furniture: Furniture;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.furnitureService.getFurnitureById(this.id)
      .subscribe(data => this.furniture = data);
  }

  edit() {
    this.furnitureService.edit(this.id, this.furniture)
      .subscribe();
  }
}
