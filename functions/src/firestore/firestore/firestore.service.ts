import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";
import { ConfigService } from "@nestjs/config";
//import * as functions from "firebase-functions";
//import * as firebase from "firebase";


@Injectable()
export class FirestoreService {
    private firestore: FirebaseFirestore.Firestore;

    constructor(private readonly configService: ConfigService) {
        if (!admin.apps.length) {
          //the admin.initializeApp() loops so we deter af one iteration
    
          admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: this.configService.get<string>(
              "FIRESTORE_ROOT_COLLECTION"
            ), //"https://pencil-test-98d8d.firebaseio.com",
          });
        }
    
        this.firestore = admin.firestore();
      }

    get db(): FirebaseFirestore.Firestore {
        return this.firestore;
      }

}
