import { ConfigService } from "@nestjs/config";
export declare class NewsletterController {
    private configService;
    constructor(configService: ConfigService);
    sendEmail(body: any, response: any): Promise<any>;
}
