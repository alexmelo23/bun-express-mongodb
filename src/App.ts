import express from "express";
import config from "./config/config";
import {internalServerError,notFound} from './middleware/httpErrors'
import cors from 'cors';
import bodyParser from 'body-parser';
import api from './api/index'


export class httpServerApp {

    public express: express.Application;
    private port:number | string;
    private server: express.Application;
    
    constructor(port:number | string ) {
     this.port = port;
     this.express = express();
     this.setExpressMiddlewares();
     this.setExpressRoutes();
     this.createHttpServer();
     this.listen();
     this.catchHhttpErrors();
    }

  
    public runHttpServer(): express.Application {
      return this.express;
    }
  
    private createHttpServer(): void {
      this.server = this.express
    }
  

  
    private setExpressMiddlewares(): void {
       this.express.use(cors());
       this.express.use(bodyParser.json());
  
    }
  
    private setExpressRoutes(): void {
       this.express.use("/api", api);
    }
  
  
    private catchHhttpErrors(): void {
       this.express.use(notFound);
       this.express.use(internalServerError);
    }
  
    private listen(): void {
      this.server.listen(this.port, () => {
        console.log("Running server on port %s", this.port);
      });
    }
  }


