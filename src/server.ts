import logger from '#config/logger.js';

import app from './app.js';

const PORT: string = process.env.PORT ?? '8080';

const server = app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

const shutdown = (signal: string) => {
  logger.info(`${signal} received. Closing server...`);
  server.close((err) => {
    if (err) {
      logger.error({ err }, 'Error during server close');
      process.exit(1);
    }
    logger.info('Server closed gracefully.');
    process.exit(0);
  });
};

['SIGINT', 'SIGTERM'].forEach((sig) => {
  process.on(sig, () => {
    shutdown(sig);
  });
});
