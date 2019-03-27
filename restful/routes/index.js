/*
//biblioteca de rotas
let express = require('express');
//importar rotas do express
let routes = express.Router();
*/

// exporta modulo para as proximas classes
module.exports = app => {
    app.get('/',(req,res) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Olá</h1>');
    
    });
    
};
