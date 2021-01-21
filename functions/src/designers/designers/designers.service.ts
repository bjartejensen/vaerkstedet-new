import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { FirestoreService } from "../../firestore/firestore/firestore.service";

@Injectable()
export class DesignersService {

    constructor(private readonly configService: ConfigService,
        private readonly firestoreService: FirestoreService){}

    async getDesigner(name:string){
        
        const designers = this.configService.get<string>("FIRESTORE_DESIGNERS_COLLECTION");
    
        const result = await this.firestoreService.db
          .collection(`${designers}`)
          .doc(name)
          .get()

        return result.data();
    }

    async getAllDesigners(){
        
        const designers = this.configService.get<string>("FIRESTORE_DESIGNERS_COLLECTION");
    
        const tmp = await this.firestoreService.db
          .collection(`${designers}`)
          .get();

        

        const result = await tmp.docs.map((x:any) => 
        { return {name:x.data().name, 
                    portfolio: x.data().images,
                    profile: x.data().profileimage,
                    socialmedia: x.data().socialmedia,
                    description: x.data().intro}})


        return tmp.size>0 ? result : null;

    }

}
