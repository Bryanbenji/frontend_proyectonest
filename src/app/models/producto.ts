export class Producto {
    id?: number;
    nombre: string;
    descripcion : string;
    precioVenta: number;
    precioCompra: number;
    totalVendido: number;


    constructor(descripcion:string,nombre: string, precioVenta: number, precioCompra: number, totalVendido:number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioVenta = precioVenta;
        this.precioCompra = precioCompra;
        this.totalVendido = totalVendido;
    }
}
