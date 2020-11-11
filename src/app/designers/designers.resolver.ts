
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SingleDesigner } from '../models';
import { DesignersService } from './designers.service';

@Injectable()
export class SingleDesignerResolver implements Resolve<SingleDesigner>{
    
    constructor(private designerService: DesignersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
            : Observable<SingleDesigner> {
            const name = route.paramMap.get("name");
            return this.designerService.fetchSingleDesigner(name);
    }

}