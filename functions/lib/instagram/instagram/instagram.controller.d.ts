import { ConfigService } from "@nestjs/config";
export declare class InstagramController {
    private readonly configService;
    constructor(configService: ConfigService);
    fetchInstaPosts(response: any): Promise<any>;
}
