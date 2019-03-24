import { Component, OnInit } from '@angular/core';
import { Furniture } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture: Furniture;

  constructor(
    private furnitureService: FurnitureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.furnitureService.getDetails(id)
      .subscribe(data => this.furniture = data);
  }
}
