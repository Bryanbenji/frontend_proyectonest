export class Producto {
    id?: number;
    descripcion : string;
    nombre: string;
    precioVenta: number;
    precioCompra: number;
    totalVendido: number;


    constructor(descripcion:string,nombre: string, precioVenta: number, precioCompra: number, totalVendido:number) {
        this.nombre = nombre;
        this.precioVenta = precioVenta;
        this.precioCompra = precioCompra;
        this.totalVendido = totalVendido;
    }
}
