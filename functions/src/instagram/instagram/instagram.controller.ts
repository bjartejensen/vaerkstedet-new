import { Controller,  Get, Res, HttpStatus, HttpException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

const axios = require("axios");

@Controller('instagram')
export class InstagramController {

    constructor(private readonly configService: ConfigService) {}

    @Get("fetch")
    async fetchInstaPosts(@Res() response: any): Promise<any> {

        try{

            const apiKey = this.configService.get<string>("INSTAGRAM_API_KEY");
            const instaUrl =this.configService.get<string>("INSTAGRAM_URL");

            const url = `${instaUrl}${apiKey}`;

            const res = await axios({
            method: "get",
            url: url,
            });

            return await response.status(HttpStatus.OK).json({ status: res });
        }

        catch(err){
            throw new HttpException("En fejl skete",400);
        }
    }

}
