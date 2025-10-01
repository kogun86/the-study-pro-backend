import logger from '#config/logger.js';
import { RequestHandler } from 'express';
import { pinoHttp } from 'pino-http';

export const httpLogger: RequestHandler = pinoHttp({ logger });
