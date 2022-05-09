import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import {router as routerCards} from './router/CardRouter.js';

dotenv.config();
let app = express();

/*bodyParser para transformar las peticiones de tipo text a json*/
app.use(bodyParser.urlencoded( {extended:false} )  );
app.use(bodyParser.json() );

app.use( morgan('dev') );
app.use( cors() );


/*headers*/
app.use( (req, res, next) =>{
    res.header('Acces-Control-Allow-Origin');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
} )

/*http://localhost:5300/puntuacion*/
app.use( '/cards', routerCards );

app.get('/', (req, res) => { res.send('Bienvenido a nuestro backend') })

const run = async () => {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    await app.listen(process.env.SERVER_PORT);
    console.log("Servidor y base de datos arrancados");
}
run().catch(err => console.log('Fallo al arrancar:' + err));


