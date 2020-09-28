import { ConfigService } from "@nestjs/config";
import { FirestoreService } from "../../firestore/firestore/firestore.service";
export declare class DesignersService {
    private readonly configService;
    private readonly firestoreService;
    constructor(configService: ConfigService, firestoreService: FirestoreService);
    getDesignersInfo(): Promise<{
        name: any;
        portfolio: any;
        profile: any;
        socialmedia: any;
        description: any;
    }[]>;
}
