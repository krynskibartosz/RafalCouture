import { connectDatabase } from './infrastructure/db';
import { Server } from './application/server';

connectDatabase()
  .then(() => {
    const server = new Server();
    server.start();
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
