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
export function clasificacion_rn(req:Request, res:Response){
    res.render('unidad4/clasificacion_rn');
}
export function desarrollos_y_aplicaciones_rn(req:Request, res:Response){
    res.render('unidad4/desarrollos_y_aplicaciones_rn');
}
export function vision_artificial(req:Request, res:Response){
    res.render('unidad4/vision_artificial');
}
export function desarrollos_y_aplicaciones_va(req:Request, res:Response){
    res.render('unidad4/desarrollos_y_aplicaciones_va');
}
export function logica_difusa(req:Request, res:Response){
    res.render('unidad4/logica_difusa');
}
export function desarrollos_y_aplicaciones_ld(req:Request, res:Response){
    res.render('unidad4/desarrollos_y_aplicaciones_ld');
}