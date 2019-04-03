import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { IDetailsFurniture } from 'src/app/contracts/IDetailsFurniture';
import { AuthService } from 'src/app/authentication/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furniture: IDetailsFurniture[];

  constructor(
    private furnitureService: FurnitureService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.furniture = this.route.data['value'].allFurniture;
  }

  remove(id: string) {
    this.furnitureService.removeFurniture(id)
      .subscribe(() => {
        this.furniture = this.furniture.filter(a => a._id !== id);
      });
  }
}
