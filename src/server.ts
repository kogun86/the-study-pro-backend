import app from './app.js';

const PORT: string = process.env.PORT ?? '8080';

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const shutdown = (signal: string) => {
  console.log(`\n${signal} received. Closing server...`);
  server.close((err) => {
    if (err) {
      console.error('Error during server close', err);
      process.exit(1);
    }
    console.log('HTTP server closed. Bye!');
    process.exit(0);
  });
};

['SIGINT', 'SIGTERM'].forEach((sig) => {
  process.on(sig, () => {
    shutdown(sig);
  });
});
