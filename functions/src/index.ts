import * as functions from "firebase-functions";
import { NestFactory } from "@nestjs/core";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";

import { AppModule } from "./app.module";
import express from "express";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { HttpExceptionFilter } from "./filters/http.filter";

const server = express();

const createNestServer = async (expressInstance: any) => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressInstance)
  );

  const development = true; //app.get(ConfigService).isDevelopment();

  const corsOptions: CorsOptions = {
    origin: development ? "*" : "https://mloggs.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
    optionsSuccessStatus: 204,
  };

 app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors(corsOptions);

  return app.init();
};

createNestServer(server)
  .then((v) => console.log("Nest Ready"))
  .catch((err) => console.error("Nest broken", err));

export const api = functions.https.onRequest(server);
