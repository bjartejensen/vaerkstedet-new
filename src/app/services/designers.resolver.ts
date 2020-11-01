import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SingleDesigner } from '../models';
import { Observable, of } from 'rxjs';
import { DesignersService } from './designers.service';

@Injectable()
export class SingleDesignerResolver implements Resolve<SingleDesigner>{
    
    constructor(private designerService: DesignersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
            : Observable<SingleDesigner> {
            
            const name = route.paramMap.get("designerUrl")
            return this.designerService.singleDesignerObs$;
        
    }

}

@Injectable()
export class DesignersResolver implements Resolve<SingleDesigner[]>{
    
    constructor(private designerService: DesignersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
            : Observable<SingleDesigner[]> {

        return this.designerService.getDesigners();
    }

}
