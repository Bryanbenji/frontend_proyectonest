export class Contrato {
    id? : number;
    identificador : string;
    fechaInicio : Date;
    fechaFin : Date;
    fechaEntregaRealizada : Date;
    descripcion : string;
    proveedor : string;
    
    constructor(identificador : string, fechaInicio : Date, fechaFin : Date, fechaEntregaRealizada : Date, descripcion : string, proveedor : string) {
        this.identificador = identificador;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.fechaEntregaRealizada = fechaEntregaRealizada;        
        this.descripcion = descripcion;
        this.proveedor = proveedor;
        
    }
}