import { Request, Response } from 'express';

export function main(req:Request, res:Response){
    res.render('main/index.ejs');
}