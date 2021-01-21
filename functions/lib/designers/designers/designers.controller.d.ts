import { DesignersService } from './designers.service';
export declare class DesignersController {
    private designersService;
    constructor(designersService: DesignersService);
    fetchDesigner(designerName: any, response: any): Promise<any>;
    fetchDesigners(response: any): Promise<any>;
}
