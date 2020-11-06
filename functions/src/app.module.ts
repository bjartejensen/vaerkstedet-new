import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { DesignersModule } from "./designers/designers.module"
//import { FirestoreService } from './firestore/firestore/firestore.service';
import { EmailModule } from './email/email.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { InstagramModule } from './instagram/instagram.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "development.env",
      isGlobal: true,
    }),
    DesignersModule,
    EmailModule,
    NewsletterModule,
    InstagramModule
    
  ]
  //providers: [FirestoreService],
})
export class AppModule {}
