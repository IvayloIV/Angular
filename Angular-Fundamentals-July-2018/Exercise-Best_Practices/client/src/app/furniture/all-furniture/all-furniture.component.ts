import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Furniture[];
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private furnitureService: FurnitureService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.furnitureService.getAll()
      .subscribe(data => {
        this.furnitures = data;
      })
  }

  changePage(event) {
    this.currentPage = event;
  }

  remove(id) {
    this.furnitureService.remove(id)
      .subscribe(() => {
        this.furnitures = this.furnitures.filter(a => a.id !== id);
      });
  }
}
