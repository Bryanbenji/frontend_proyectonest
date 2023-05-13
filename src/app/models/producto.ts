export class Producto {
    id?: number;
    nombre: string;
    descripcion : string;
    precioVenta: number;
    precioCompra: number;
    totalVendido: number;
    categoriaId: number;


    constructor(nombre: string, descripcion:string, precioVenta: number, precioCompra: number, totalVendido:number, categoriaId: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioVenta = precioVenta;
        this.precioCompra = precioCompra;
        this.totalVendido = totalVendido;
        this.categoriaId = categoriaId;

    }
}
