export class Producto {
    id?: number;
    nombre: string;
    imagenUrl: string;
    descripcion : string;
    precioCompra: number;
    categoria: string;
    nombreproveedor : string;


    constructor(nombre: string, imagenUrl: string,descripcion:string, precioCompra: number, categoria: string, nombreproveedor : string) {
        this.nombre = nombre;
        this.imagenUrl = imagenUrl;
        this.descripcion = descripcion;
        this.precioCompra = precioCompra;
        this.categoria = categoria;
        this.nombreproveedor = nombreproveedor;

    }
}
