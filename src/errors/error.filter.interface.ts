import { NextFunction, Request, Response} from 'express';

export interface IErrorFilter {
  catch: (err: Error, req: Request, res: Response, next: NextFunction) => void;
}