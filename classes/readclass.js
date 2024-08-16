
const { Werks } = require("../models/response");
const Busquedas = require("./../services/http_service");

class ReadData {
  constructor() {
    this.busquedas = new Busquedas();
    this.errorCode = 200;
    this.errortext;
    this.reswerks  = [{}];
  }
  async readData(opt, body ) {
     this.reswerks = [{}];
      switch (opt) {
        case 1:
          
//        this.reswerks = await this.busquedas.leerCentros( );
          await this.busquedas.leerCentros( ).then( resp => {this.reswerks = resp; this.werks = [] } );
           this.reswerks.map( (element) => { this.werks.push({ werks: element.Werks, name: element.Name1 } ) } );
          break;
        case 2:
            await this.busquedas.leerUsuario(body).then( resp => { 
                                                                   this.reswerks[0] = resp;
                                                               this.usr = {};
                                                               this.reswerks.map(
                                                                (element) => 
                                                                  { if(element.errorCode === undefined)
                                                                   { this.usr = { werks: element.Werks,
                                                                                  idUsr: element.Idusr,
                                                                                  auth: element.Auth }
                                                                }else{
                                                                  this.usr = { werks: element.Werks,
                                                                               idUsr: element.Idusr,
                                                                               auth: element.Auth,
                                                                               errorCode: element.errorCode,
                                                                               errorText: element.errorText }
                                                                }
                                                                
                                                                }
                                                              );
            } );
          break;
        case 3:
            await this.busquedas.leerOrden(body).then( resp =>{ 
                                                         this.reswerks[0] = resp;
                                                         this.hordr = {};  });
             this.reswerks.map(
            (element) =>
              { 
                if(element.errorCode === undefined){
                element.np_ebelnoc !== null 
                ? this.hordr = { ebeln: element.np_ebelnoc.Ebeln, aedat: element.np_ebelnoc.Aedat, lifnr: element.np_ebelnoc.Lifnr,
                                 name: element.np_ebelnoc.Name1,  stcd1: element.np_ebelnoc.Stcd1,} 
                :this.hordr = { ebeln: '', aedat: '20240801', lifnr: '', name:  '', stcd1: '' } }
              else{ this.hordr = { ebeln: '', aedat: '20240801', lifnr: '', name:  '', stcd1: '',errorCode: element.errorCode, errorText: element.errorText } }
               }
          );
          break;
        case 4:
          await this.busquedas.registrarFactura(body).then( resp =>{ this.reswerks[0] = resp;
                                                                     this.invoice = {};  }); 
           this.reswerks.map( (element) => { 
                if(element.errorCode === undefined){
                    this.invoice = { lifnr:   element.Lifnr, invoice: element.Ebeln, status:  element.Status } }
                 else{ this.invoice = { lifnr:   element.Lifnr, invoice: element.Ebeln, status:  element.Status, 
                                        errorCode: element.errorCode, errorText: element.errorText
                                      } } } );                        
          break;
        case 5:
          break;
      }
    };
}

module.exports = ReadData