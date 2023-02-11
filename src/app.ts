import express, {Application} from 'express';
import path from 'path';

/** IMPORTING ROUTES: */
import mainRoutes from './routes/main.router';

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

/** STATIC FILES: */
app.use(express.static(path.join(__dirname, 'public')));

// Exporting the app:
export default app;