const express = require('express');
const logger = require('morgan');
const path = require ('path');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT

const app = express();
app.set ('view engine', 'ejs');
app.set ('views', path.join(__dirname, '/views'));

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Servidor en línea en puerto ${PORT}`)
})