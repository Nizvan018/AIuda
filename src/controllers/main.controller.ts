import { Request, Response } from 'express';

export function main(req:Request, res:Response){
    res.render('main/index.ejs');
}

export function bibliografia(req:Request, res:Response){
    res.render('bibliografia.ejs');
}

export function aboutus(req:Request, res:Response){
    res.render('aboutus.ejs');
}