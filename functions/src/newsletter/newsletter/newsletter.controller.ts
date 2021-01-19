import { Controller, Body, Post, Res, HttpStatus, UseFilters } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpExceptionFilter } from "../../filters/http.filter";
const axios = require("axios");

@Controller('newsletter')
@UseFilters(new HttpExceptionFilter())
export class NewsletterController {

    constructor(private configService: ConfigService) {}

    @Post("subscribe")
    async sendEmail(@Body() body:any, @Res() response: any){
        
            const email = body.email;

            const audienceId = this.configService.get<string>(
                "MAILCHIMP_AUDIENCE_ID"
              );
              const apiKey = this.configService.get<string>("MAILCHIMP_API_KEY");
              const baseUrl = this.configService.get<string>("MAILCHIMP_BASE_URL");
              const url = baseUrl + audienceId;

              //Fake an error
            //throw new HttpException("En fejl skete",400);
            
            const ret = await axios({
                method: "post",
                url: url,
                data: {
                  members: [
                    {
                      email_address: email,
                      status: "subscribed",
                    },
                  ],
                },
                headers: {
                  Authorization: "auth " + apiKey,
                },
              }); 

            console.log(ret);

            
            return response.status(HttpStatus.OK);
    }

}
