import { Request, Response } from 'express';

export function robotica(req:Request, res:Response){
    res.render('unidad4/robotica');
}

export function clasificacion(req:Request, res:Response){
    res.render('unidad4/clasificacion');
}
export function desarrollos_y_aplicaciones(req:Request, res:Response){
    res.render('unidad4/desarrollos_y_aplicaciones');
}

export function redes_neuronales(req:Request, res:Response){
    res.render('unidad4/redes_neuronales');
}
