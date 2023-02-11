import { Request, Response } from 'express';

export function main(req:Request, res:Response){
    res.send('Hola mundo');
}