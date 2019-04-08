import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PostInfo } from '../models/post-info';
import { PostService } from '../services/post.service';

@Injectable()
export class PostDetailsResolver implements Resolve<PostInfo> {
    constructor(private postService: PostService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id']
        return this.postService.getDetails(id);
    }
}
