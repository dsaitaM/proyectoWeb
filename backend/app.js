const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();



//Import Routes
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');
const ordenesRoute = require('./routes/ordenes');
const calificacionRoute = require('./routes/calificacion');
const comentariosRoute = require('./routes/comentarios');

//Use routes

app.use('/api/products', productsRoute);
app.use('/api/users', usersRoute);
app.use('/api/ordenes', ordenesRoute);
app.use('/api/calificacion', calificacionRoute);
app.use('/api/comentarios', comentariosRoute);








app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-with. Accept'
}));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;
