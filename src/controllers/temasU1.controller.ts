import { Request, Response } from 'express';

export function definicion_historia(req:Request, res:Response){
    res.render('unidad1/definicion_historia.ejs');
}

export function habilidades_proceso(req:Request, res:Response){
    res.render('unidad1/habilidades_proceso.ejs');
}

export function proceso_razonamiento(req:Request, res:Response){
    res.render('unidad1/proceso_razonamiento.ejs');
}