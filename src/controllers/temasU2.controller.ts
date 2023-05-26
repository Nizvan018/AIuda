import { Request, Response } from 'express';

export function principios_y_metodologia(req:Request, res:Response){
    res.render('unidad2/principios_metodologiaIA.ejs');
}

export function paradigmas(req:Request, res:Response){
    res.render('unidad2/paradigmas_IA.ejs');
}

export function mapas_conceptuales(req:Request, res:Response){
    res.render('unidad2/mapas_conceptuales.ejs');
}
export function redes_semanticas(req:Request, res:Response){
    res.render('unidad2/redes_semanticas.ejs');
}

export function razonamiento_monotono(req:Request, res:Response){
    res.render('unidad2/razonamiento_monotono.ejs');
}

export function otras_logicas(req:Request, res:Response){
    res.render('unidad2/otras_logicas.ejs');
}
export function razonamiento_probabilistico(req:Request, res:Response){
    res.render('unidad2/razonamiento_probabilistico.ejs');
}
export function teorema_de_Bayes(req:Request, res:Response){
    res.render('unidad2/teorema_de_Bayes.ejs');
}
// export function (req:Request, res:Response){
//     res.render('unidad2/.ejs');
// }