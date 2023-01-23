import express from 'express';
import { port } from '../config';
import shoppingItemRouter from '../presentation/controllers/shopping';
import helmet from 'helmet';

export class Server {
  app: express.Application;
  constructor() {
    this.app = express();
    this.app.use('', shoppingItemRouter);
    this.app.use(helmet());
    this.app.use((err: any, res: express.Response) => {
      res.status(err.status || 500).send({
        message: err.message
      });
    });
  }

  start() {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
