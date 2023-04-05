import { Request, Response } from 'express';

export function definicion_historia(req:Request, res:Response){
    res.render('unidad1/definicion_historia.ejs');
}
