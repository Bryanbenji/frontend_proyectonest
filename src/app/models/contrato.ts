export class Contrato {
    id? : number;
    identificador : string;
    fechaInicio : Date;
    fechaFin : Date;
    proveedor : string;
    
    constructor(identificador : string, fechaInicio : Date, fechaFin : Date, proveedor : string) {
        this.identificador = identificador;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.proveedor = proveedor;
        
    }
}