import pino, { LoggerOptions } from 'pino';

import { LOG_LEVEL, NODE_ENV } from './env.js';

const config: LoggerOptions = {
  level: LOG_LEVEL,
  ...(NODE_ENV === 'development' && {
    transport: { options: { colorize: true }, target: 'pino-pretty' },
  }),
};

const logger = pino(config);

export default logger;
