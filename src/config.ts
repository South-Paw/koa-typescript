import { Options as CorsOptions } from '@koa/cors';
import dotenv from 'dotenv';
import { Options as BodyParserOptions } from 'koa-bodyparser';

const { name, version } = require('../package.json');

dotenv.config();

export const appConfig = {
  env: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || name,
  version,
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.APP_PORT || 7070,
};

// koa-bodyparser config
// https://github.com/koajs/bodyparser
export const bodyParserConfig: BodyParserOptions = {
  enableTypes: ['json'],
  jsonLimit: '1mb',
};

// koa-cors config
// https://github.com/koajs/cors
export const corsConfig: CorsOptions = {
  origin: '*',
  allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
  exposeHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
  allowHeaders: ['Content-Type', 'Authorization'],
};
