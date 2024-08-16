
const express = require("express");
const axios   = require("axios");
const request = require("request");
const cors    = require('cors');
const ReadData = require("../classes/readclass");

class Server{

    constructor(){
        this.server = express();
        this.readData = new ReadData();
        this.port   = process.env.PORT || 3200;
        this.corsOptions = {
                            origin: 'http://localhost:4200',
                            optionsSuccessStatus: 200 // For legacy browser support
                           }
        // Middlewares                  
        this.server.use(cors());   
        this.server.use( express.json() );              
        // Routes -> rutas de la Aplicacion
        this.routes();
    }
    routes(){ 
            this.server.get('/',async(req, resp, next ) =>{
                await this.readData.readData(1) ;
                resp.json( this.readData.werks );
             }  );
                this.server.get('/setWerks', async(req, resp, next ) =>{
                await this.readData.readData(1);
                this.readData.reswerks[0].errorCode !== undefined ? resp.sendStatus(this.readData.reswerks[0].errorCode) : resp.json( this.readData.werks );
//              resp.json( this.readData.werks );
            } );
            this.server.get('/checkUsr',async(req, resp, next ) =>{
                const body = req.query;
                await this.readData.readData(2,body );
                this.readData.usr.errorCode !== undefined ? resp.sendStatus(this.readData.usr.errorCode) : resp.json( this.readData.usr );
                } ) ;  
            this.server.post('/checkUsr',async(req, resp, next ) =>{
                const body = req.body;
                await this.readData.readData(2,body );
                this.readData.usr.errorCode !== undefined ? resp.sendStatus(this.readData.usr.errorCode) : resp.json( this.readData.usr );
            } ) ;       
            this.server.get('/getOrdr',async(req, resp ) =>{
                const body = req.query;
                await this.readData.readData(3, body );
                this.readData.hordr.errorCode !== undefined ? resp.sendStatus(this.readData.hordr.errorCode) : resp.json( this.readData.hordr );
            } ) ;    
            this.server.post('/getOrdr',async(req, resp ) =>{
                const body = req.body;
                await this.readData.readData(3, body );
                this.readData.hordr.errorCode !== undefined ? resp.sendStatus(this.readData.hordr.errorCode) : resp.json( this.readData.hordr );
//                resp.json( this.readData.hordr );
            } ) ;    
            this.server.post('/setInvoice',async(req, resp)=>{
                const body = req.body;
                await this.readData.readData(4, body);
//                resp.json( this.readData.invoice );  
                this.readData.invoice.errorCode !== undefined ? resp.sendStatus(this.readData.invoice.errorCode) : resp.json( this.readData.invoice );  
            } ) ;  
    } 
    listen(){
/*         this.server.listen(this.port, 
                           ()=>{ console.log('Servidor corriendo en puerto', this.port);}); */
           this.server.listen(this.port) };
}

module.exports = Server