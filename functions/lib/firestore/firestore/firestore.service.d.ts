import { ConfigService } from "@nestjs/config";
export declare class FirestoreService {
    private readonly configService;
    private firestore;
    constructor(configService: ConfigService);
    get db(): FirebaseFirestore.Firestore;
}
