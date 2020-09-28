import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SingleDesigner } from '../models';
import { Observable } from 'rxjs';
import { DesignersService } from './designers.service';

@Injectable()
export class DesignersResolver implements Resolve<SingleDesigner[]>{
    
    constructor(private designerService: DesignersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
            : Observable<SingleDesigner[]> {

        return this.designerService.getDesigners();
    }

}
