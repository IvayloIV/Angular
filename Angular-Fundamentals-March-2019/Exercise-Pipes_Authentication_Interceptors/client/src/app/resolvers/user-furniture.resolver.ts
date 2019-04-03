import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { FurnitureService } from "../furniture/furniture.service";

@Injectable()
export class UserFurnitureResolver implements Resolve<any> {
    constructor(private furnitureService: FurnitureService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.furnitureService.getUserFurniture();
    }
}
