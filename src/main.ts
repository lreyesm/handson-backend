import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';
const server: express.Express = express();
export const createNestServer = async (expressInstance: express.Express) => {
    const adapter = new ExpressAdapter(expressInstance);
    const app = await NestFactory.create<NestExpressApplication>(AppModule, adapter, {});
    app.enableCors({
        origin: ['http://localhost:4200', 'https://handson-table.web.app'],
    });
    // app.setGlobalPrefix('api'); //this is not needed the export function name already contains 'api'
    app.useGlobalPipes(new ValidationPipe());
    return app.init();
};
createNestServer(server)
    .then((v) => console.log('Nest Ready'))
    .catch((err) => console.error('Nest broken', err));
export const api: functions.HttpsFunction = functions.https.onRequest(server);
