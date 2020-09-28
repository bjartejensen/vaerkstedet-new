import { DesignersService } from './designers.service';
export declare class DesignersController {
    private designersService;
    constructor(designersService: DesignersService);
    fetchDesigners(headers: any, response: any): Promise<any>;
}
