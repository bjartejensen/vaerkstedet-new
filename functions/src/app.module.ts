import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { DesignersModule } from "./designers/designers.module"
//import { FirestoreService } from './firestore/firestore/firestore.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "development.env",
      isGlobal: true,
    }),
    DesignersModule
    
  ]
  //providers: [FirestoreService],
})
export class AppModule {}
