//import { v4 as uuidv4 } from 'uuid';
const axios = require("axios");
const { Werks } = require("../models/response");
const { json } = require("express");
const Params  = require("./params");
const Global  = require("../glblsystem.json")

const parameters = new Params(Global.SapSystem.Sap);


class Busquedas {
 
  constructor() { }
  get headers(){
    return ({
          "Authorization": parameters.authorization,
          "Access-Control-Allow-Origin": "*",
          "X-CSRF-Token": "Fetch",
          "X-Requested-With": "X",
        })
  }

   leerCentros() {
    let url =  parameters.urls.rfctGetWerks;
    try {
          const resp = axios
            .get(url, {
              headers:{
                "Authorization": parameters.authorization, // Basic bHJleWVzOiRaZW5pdDIwMjQ9KSg=
                "Access-Control-Allow-Origin": "*",
                "X-CSRF-Token": "Fetch",
                "X-Requested-With": "X",
              }
            })
            .then((result) => {
              return result.data.d.results;
            }) //.data.d.results
            .catch((error) => {
              return ([{ werks: "", name: "" , errorCode: error.response.status ,errorText: error.response.statusText }]);
            });
          return resp;      
        } catch (error) { 
          return error 
        }

  }
   leerUsuario(body) {
    let  url = parameters.urls.rfctGetUser;
    let coleccion = [];
    const resp = axios
      .post(
        url,body,
        {
          headers: {
            "Authorization": parameters.authorization,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "X-CSRF-Token": "Fetch",
            "X-Requested-With": "X",
          },
        }
      )
      .then((result) => {
        return result.data.d;
      }) //.data.d
      .catch((error) => {return( { werks: "",
                                   idUsr: "",
                                   auth:  "",
                                   errorCode: error.response.status ,
                                   errorText: error.response.statusText  }
                               )});
    return resp;
  }
  async leerOrden(body) {
   let url = parameters.urls.rfctGetOrdr;

    let coleccion = [];
    const resp = await axios
      .post(
        url, body,{
                    headers: {
                    "Authorization": parameters.authorization,   //Basic bHJleWVzOiRaZW5pdDIwMjQ9KSgvJg==
                    "Access-Control-Allow-Origin": "*",
                    "X-CSRF-Token": "Fetch",
                    "X-Requested-With": "X",
                   },
                 }).then((result) => {
        return result.data.d;
      }) //Result.data
      .catch((error) => {
       return ({ Ebeln: "", np_ebelnoc:{ Ebeln:"",Aedat:"",Lifnr:"",Name1:"", Stcd1:""}, errorCode: error.response.status ,errorText: error.response.statusText });
      });
    return resp;
  }
  async registrarFactura(body) {
    let  url = parameters.urls.rfctSetData;
    let coleccion = [];
    const resp = await axios.post(url, body,{
                    headers: {
                    "Authorization": parameters.authorization,
                    "Access-Control-Allow-Origin": "*",
                    "X-CSRF-Token": "Fetch",
                    "X-Requested-With": "X",
                   },
                 }).then((result) => { return result.data.d; }) //Result.data
      .catch((error) => { 
       return({ Ebeln: "", np_ebelnoc:{ Ebeln:"",Aedat:"",Lifnr:"",Name1:"", Stcd1:""}, errorCode: error.response.status ,errorText: error.response.statusText });
      });
    return resp;
  }
}

module.exports = Busquedas;
