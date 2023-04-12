import express, {Application} from 'express';
import path from 'path';

/** IMPORTING ROUTES: */
import mainRoutes from './routes/main.router';
import temasU1Routes from './routes/temasU1.router';
import temasU2Routes from './routes/temasU2.router';
import temasU3Routes from './routes/temasU3.router';
import temasU4Routes from './routes/temasU4.router';

const app:Application = express();

/** SETTINGS: */
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/** MIDDLEWARES: */


/** OTHERS: */
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

/** ROUTES: */
app.use('/', mainRoutes);
/*unidad 1*/
app.use('/inteligencia_artificial', temasU1Routes);
/*unidad 2*/
app.use('/aspectos_metodologicos_de_IA', temasU2Routes);
/*unidad 3*/
app.use('/int', temasU3Routes);
/*unidad 4*/
app.use('/aplicaciones_IA', temasU4Routes);

/** STATIC FILES: */
app.use(express.static(path.join(__dirname, 'public')));

// Exporting the app:
export default app;