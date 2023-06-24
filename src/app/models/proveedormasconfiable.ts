export class ProveedorMasConfiable {
    id?: number;
    ruc : string;
    nombreproveedor: string;
    producto: string;
    puntaje: number;
    recindir: string;


    constructor(ruc: string, nombreproveedor: string,producto:string, puntaje: number, recindir : string) {
        this.ruc = ruc;
        this.nombreproveedor = nombreproveedor;
        this.producto = producto;
        this.puntaje = puntaje;
        this.recindir = recindir;

    }
}