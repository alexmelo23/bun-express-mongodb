 
 import { Request, Response , NextFunction  } from 'express';
 import * as httpStatus from 'http-status';

 // handle internal server errors
  export const internalServerError = (err:any, req:Request, res:Response, next:NextFunction) => {
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
    res.json({
      message: err.message,
      extra: err.extra,
      errors: err
    });
    res.end();
  };


  // handle not found errors 404
export const notFound = (err:any, req:Request, res:Response, next:NextFunction) => {
    res.status(httpStatus.NOT_FOUND);
    res.json({
      success: false,
      message: 'Requested Resource Not Found'
    });
    res.end();
  };
  