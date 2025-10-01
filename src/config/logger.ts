import pino, { LoggerOptions } from 'pino';

const config: LoggerOptions = {
  level: process.env.LOG_LEVEL ?? 'info',
  ...(process.env.NODE_ENV === 'development' && {
    transport: { options: { colorize: true }, target: 'pino-pretty' },
  }),
};

const logger = pino(config);

export default logger;
