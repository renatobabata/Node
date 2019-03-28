/*
//biblioteca de rotas
let express = require('express');
//importar rotas do express
let routes = express.Router();
*/

let NeDB = require('nedb');
//criacao do banco
let db = NeDB({
    //nome do banco
    filename:'users.db',
    autoload: true 
});

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
    
    app.post('/users',(req,res)=>{
        
        db.insert(req.body,(err,user)=>{
            if(err){
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });
            }else{
                res.status(200).json(user);
            }
        });
    });
};