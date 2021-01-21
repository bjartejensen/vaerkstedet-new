import * as functions from "firebase-functions";
import { NestFactory } from "@nestjs/core";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
import cors from "cors";
import { AppModule } from "./app.module";
import express from "express";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
//import { HttpExceptionFilter } from "./filters/http.filter";
//import { ConfigService } from "@nestjs/config";

const server = express();

server.use(cors({ origin: true }));

const createNestServer = async (expressInstance: any) => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressInstance)
  ); 

  //const development = true; //app.get(ConfigService).isDevelopment();

   const corsOptions: CorsOptions = {
    origin: "*", //development ? "*": "https://pencil-test-98d8d.firebaseapp.com/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "*",//"Origin,Content-Type,Content-Length,Function-Execution-Id,Date,Etag,Cache-Control,Alt-Svc,Content-Encoding,Accept,Cache",
    credentials: true,
    optionsSuccessStatus: 204,
  }; 

 // app.useGlobalFilters(new HttpExceptionFilter());

  app.enableCors(corsOptions);

  return app.init();
};

createNestServer(server)
  .then((v) => console.log("Nest Ready"))
  .catch((err) => console.error("Nest broken", err));

export const api = functions.https.onRequest(server);
