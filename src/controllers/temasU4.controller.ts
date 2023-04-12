import { Request, Response } from 'express';

export function robotica(req:Request, res:Response){
    res.render('unidad4/robotica');
}

export function clasificacion(req:Request, res:Response){
    res.render('unidad4/clasificacion');
}