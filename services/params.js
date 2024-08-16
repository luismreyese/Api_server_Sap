
 class Params{
    authorization = '';
    urls= {rfctGetWerks: " ", rfctGetUser:" ", rfctGetOrdr:" ",  rfctSetData:" " };

constructor(system){
        this.authorization = 'Basic dXNyUmVjZmFjdDpHcmV5QXVnMjQhIQ==';
    switch (system) {
        case 'DEV': this.loadDev(); break;
        case 'QAS': this.loadQas(); break;
        case 'PRD': this.loadPrd();break;
        default: this.loadQas();   break;
    }
}
loadDev(){
this.urls =   { rfctGetWerks: "http://reyeccvd00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zcentroSet",
           rfctGetUser:  "http://reyeccvd00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zusuarioSet",
           rfctGetOrdr:  "http://reyeccvd00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zebelnSet",
           rfctSetData:  "http://reyeccvd00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS2_SRV/zfacturaSet"  
        } 
}
loadQas(){
this.urls =   { rfctGetWerks: "http://reyeccvq00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zcentroSet",
           rfctGetUser:  "http://reyeccvq00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zusuarioSet",
           rfctGetOrdr:  "http://reyeccvq00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zebelnSet",
           rfctSetData:  "http://reyeccvq00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS2_SRV/zfacturaSet"     
        }
}
loadPrd(){
this.urls =   { rfctGetWerks: "http://reyeccvp00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zcentroSet",
           rfctGetUser:"http://reyeccvp00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zusuarioSet",
           rfctGetOrdr:"http://reyeccvp00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS_SRV/zebelnSet",
           rfctSetData:"http://reyeccvp00.gporey.com:8080/sap/opu/odata/sap/ZOD_REGISTRO_FACTURAS2_SRV/zfacturaSet"   
        }
       }
 }

 module.exports = Params