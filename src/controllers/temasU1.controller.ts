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

export function modelo_adquisicion(req:Request, res:Response){
    res.render('unidad1/modelo_adquisicion.ejs');
}

export function modelo_cognoscitivo(req:Request, res:Response){
    res.render('unidad1/modelo_cognoscitivo.ejs');
}

export function modelo_agente_inteligente(req:Request, res:Response){
    res.render('unidad1/modelo_agente_inteligente.ejs');
}

export function papel_heuristica(req:Request, res:Response){
    res.render('unidad1/papel_heuristica.ejs');
}