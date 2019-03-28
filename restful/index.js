// carregar modulo
//const http = require('http');

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

//solicitar arquivos
// ./ indica o diretorio atual
/*
let routesIndex = require('./routes/index')
let routeUsers 	= require('./routes/users')
*/

// utilizando express()
// importa todas funcionalidades do express
// criacao do servidor
let app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// -> chama o consign
// -> inclui todas as rotas que estao no diretorio routes
// -> insere no app
consign().include('routes').into(app);

/*
// usar recurso
app.use(routesIndex);
// passa o parametro para identificar qual sera o inicio do diretorio
app.use('/users',routeUsers);
*/
//define a escuta. porta e ip
app.listen(3000,'127.0.0.1',()=>{
	console.log('servidorrr runninnggg');
});





/* modo original  
// criar servidor
let server = http.createServer((req,res) =>{


	console.log('URL: ',req.url);
	console.log('METHOD: ',req.method);

	switch(req.url){
		case '/':
			// ok
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end('<h1>Olá</h1>');
		break;

		case '/users':
			res.statusCode = 200;
			res.setHeader('Content-Type','application/json');
			res.end(JSON.stringify({
				users:[{
					name: 'Hcode',
					email: 'contato@hcode.com.br',
					id: 1
				}]
			}));
		break;

	}

});

// ouvir porta 3000
server.listen(3000, '127.0.0.1', ()=> {
	console.log('servidor rodando!');
});
	
*/