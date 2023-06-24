export class ReporteContrato {
    id? : number;
    ruc: string;
    nombreproveedor : string;
    cantidadcontratos : string;
    fechaInicio : Date;
    fechaFin : Date;
    
    constructor(ruc : string, nombreproveedor : string, cantidadcontratos : string, fechaInicio : Date, fechaFin : Date) {
        this.ruc = ruc;
        this.nombreproveedor = nombreproveedor;
        this.cantidadcontratos = cantidadcontratos;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        
    }
}