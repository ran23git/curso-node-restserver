const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
       
        this.conectarDB; //conectar a base de datos
        this.middlewares();//middlewars
        this.routes();//rutas de mi aplicacion
    }

    async conectarDB() {   await dbConnection();    }

    middlewares () {
        this.app.use(cors()); //cors
        this.app.use( express.json() );//lectura y parseo del body
        this.app.use( express.static('public') ) ; //directorio publico
    }

    routes(){       this.app.use(this.usuariosPath, require('../routes/usuarios'));    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en puerto',this.port )        });    }    
}

module.exports=Server;
