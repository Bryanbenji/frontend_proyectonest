export class DetalleContrato {
    id? : number;
    identificadorContrato : string;
    fechaEntregaRealizada : Date;
    descripcion : string;
    
    constructor(identificadorContrato : string, fechaEntregaRealizada : Date, descripcion : string) {
        this.identificadorContrato = identificadorContrato;
        this.fechaEntregaRealizada = fechaEntregaRealizada;        
        this.descripcion = descripcion;
        
    }
}