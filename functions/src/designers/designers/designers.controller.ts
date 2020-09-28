import { Controller, Get, HttpStatus, Res, Headers, } from '@nestjs/common';
import { DesignersService } from './designers.service';

@Controller('designers')
export class DesignersController {

    constructor(private designersService: DesignersService){}

    @Get("fetch")
    async fetchDesigners(@Headers() headers:any,@Res() response ){

        try{

            const designers = await this.designersService.getDesignersInfo();

            console.log("suc");

            return await response
            .status(HttpStatus.OK).send({designers: designers});

        }

        catch(err){
           // console.log(JSON.stringify(err));

            return response
            .status(400)
            .send(`Event get all error: ${JSON.stringify(err)}`);
        }

    }

}
