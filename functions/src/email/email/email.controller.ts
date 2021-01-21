import { Controller, Body, Post, Res, HttpStatus } from "@nestjs/common";
//import { ConfigService } from "@nestjs/config";

//const sgMail = require("@sendgrid/mail");

@Controller('email')
export class EmailController {

    //constructor(private configService: ConfigService) {}
    constructor() {}

    @Post("send")
    async sendEmail(@Body() body:any, @Res() response: any){
        
             const mailfrom = body.from;
          /*  const subject = body.subject;
            const message = body.message;
 */
            //Fake an error
            //throw new HttpException("En fejl skete",400);

            console.log(mailfrom);

          /*  const sendGridApiKey = this.configService.get<string>("SENDGRID_API_KEY");
            sgMail.setApiKey(sendGridApiKey);
            const sendTo = this.configService.get<string>("SENDGRID_SEND_TO_EMAIL");

            const msg = {
                to: sendTo,
                from: mailfrom,
                subject: subject, 
                text: message
              };

            const resp = await sgMail.send(msg); */

            const resp =  "Dummy";

            return await response.status(HttpStatus.OK).json({ status: resp });
    }

}

