import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDetailsFurniture } from 'src/app/contracts/IDetailsFurniture';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture: IDetailsFurniture;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.furniture = this.route.data['value'].details;
  }
}
