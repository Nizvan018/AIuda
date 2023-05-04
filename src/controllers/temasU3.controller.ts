import { Request, Response } from 'express';

export function representacion_de_conocimientos(req:Request, res:Response){
    res.render('unidad3/representacion_de_conocimientos');
}

export function metodos_de_inferencia(req:Request, res:Response){
    res.render('unidad3/metodos_de_inferencia');
}

export function reglas_de_produccion(req:Request, res:Response){
    res.render('unidad3/reglas_de_produccion');
}

export function sintaxis_de_las_reglas(req:Request, res:Response){
    res.render('unidad3/sintaxis_de_las_reglas');
}

export function semantica_reglas(req:Request, res:Response){
    res.render('unidad3/semantica_reglas');
}

export function arquitectura_sistema(req:Request, res:Response){
    res.render('unidad3/arquitectura_sistema');
}