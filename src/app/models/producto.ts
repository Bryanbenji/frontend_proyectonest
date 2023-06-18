export class Producto {
    id?: number;
    nombre: string;
    imagenUrl: string;
    descripcion : string;
    precioVenta: number;
    precioCompra: number;
    totalVendido: number;
    categoria: string;


    constructor(nombre: string, imagenUrl: string,descripcion:string, precioVenta: number, precioCompra: number, totalVendido:number, categoria: string) {
        this.nombre = nombre;
        this.imagenUrl = imagenUrl;
        this.descripcion = descripcion;
        this.precioVenta = precioVenta;
        this.precioCompra = precioCompra;
        this.totalVendido = totalVendido;
        this.categoria = categoria;

    }
}
