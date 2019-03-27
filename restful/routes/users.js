/*
//biblioteca de rotas
let express = require('express');
//importar rotas do express
let routes = express.Router();
*/

module.exports = (app)=>{
    app.get('/users',(req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','apllication/json');
        //funcao nativa do express res.json
        res.json({
            users:[{
                name: 'Renato',
                email: 'email',
                id: 1
            }]
        });
    });
    
    app.get('/users/admin',(req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','apllication/json');
        //funcao nativa do express res.json
        res.json({
            users:[{
                
            }]
        });
    });
};