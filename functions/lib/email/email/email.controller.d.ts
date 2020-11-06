import { ConfigService } from "@nestjs/config";
export declare class EmailController {
    private configService;
    constructor(configService: ConfigService);
    sendEmail(body: any, response: any): Promise<any>;
}
