import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import { DesignersService } from './designers.service';

@Controller('designers')
export class DesignersController {

    constructor(private designersService: DesignersService){}

    @Get(":designername")
    async fetchDesigner(@Param("designername") designerName:any,@Res() response:any ){

        try{

            const designer = await this.designersService.getDesigner(designerName);

            return await response
            .status(HttpStatus.OK).send(designer);

        }

        catch(err){
            return response
            .status(400)
            .send(`Event get all error: ${JSON.stringify(err)}`);
        }

    }

    @Get("fetchall")
    async fetchDesigners(@Res() response:any ){

        try{

            const designers = await this.designersService.getAllDesigners();

            return await response
            .status(HttpStatus.OK).send({designers: designers});

        }

        catch(err){

            return response
            .status(400)
            .send(`Event get all error: ${JSON.stringify(err)}`);
        }

    }

}
