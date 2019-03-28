/*
//biblioteca de rotas
let express = require('express');
//importar rotas do express
let routes = express.Router();
*/

let NeDB = require('nedb'); 
//criacao do banco
let db = new NeDB({
    //nome do banco
    filename:'users.db',
    autoload: true 
});

module.exports = (app)=>{

    let route = app.route('/users');

    route.get((req,res)=>{
        // ordena ascendente pelo nome
        db.find({}).sort({name:1}).exec((err,users)=>{
            if(err){
                app.utils.error.send(err,req,res);
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type','apllication/json');
                //funcao nativa do express res.json
                res.json({
                    // users: users 
                    // quando nome do atributo e parametro do objeto sao iguais , so precisa declarar uma vez
                    users
                });
            }
        });
    });
    
    route.post((req,res)=>{
        
        if(!app.utils.validator.user(app,req,res)) return false;

        db.insert(req.body,(err,user)=>{
            if(err){
                /*
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });
                */
               app.utils.error.send(err,req,res);
            }else{
                res.status(200).json(user);
            }
        });
    });

    let routeId = app.route('/users/:id');
    //rota para buscar apenas um usuario pelo Id
    routeId.get((req,res) =>{
        db.findOne({_id:req.params.id}).exec((err,user)=>{
            if(err){
               app.utils.error.send(err,req,res);
            }else{
                res.status(200).json(user);
            }
        });
    });

    // rota para atualizar usuario pelo id
    routeId.put((req,res) =>{

        if(!app.utils.validator.user(app,req,res)) return false;

        db.update({_id:req.params.id}, req.body, err =>{
            if(err){
               app.utils.error.send(err,req,res);
            }else{
                res.status(200).json(Object.assign(req.params,req.body));
            }
        });
    });

    // rota para deletar usuario pelo id
    
    routeId.delete((req,res)=>{

        db.remove({_id: req.params.id},{},err=>{
            if(err){
                app.utils.error.send(err,req,res);
             }else{
                 res.status(200).json(req.params);
             } 
        })
    })

};