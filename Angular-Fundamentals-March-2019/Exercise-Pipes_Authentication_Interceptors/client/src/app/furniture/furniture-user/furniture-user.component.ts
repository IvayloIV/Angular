import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { IDetailsFurniture } from 'src/app/contracts/IDetailsFurniture';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  furniture: IDetailsFurniture[];

  constructor(
    private furnitureService: FurnitureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.furniture = this.route.data['value'].userFurniture;
  }

  remove(id: string) {
    this.furnitureService.removeFurniture(id)
      .subscribe(() => {
        this.furniture = this.furniture.filter(a => a._id !== id);
      });
  }
}
