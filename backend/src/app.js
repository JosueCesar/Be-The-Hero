import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
    this.handleErrors();
  }
  middlewares(){
    this.server.use(cors());
    this.server.use(express.json());
  }
  routes(){
    this.server.use(routes);
  }
  handleErrors(){
    this.server.use(errors());
  }
}

export default new App().server;