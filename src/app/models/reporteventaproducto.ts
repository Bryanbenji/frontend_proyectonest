export class ReporteVentaProducto {
    id?: number;
    nombreproducto: string;
    precioVenta: number;
    totalVendido: number;


    constructor(nombreproducto: string, precioVenta: number, totalVendido:number) {
        this.nombreproducto = nombreproducto;
        this.precioVenta = precioVenta;
        this.totalVendido = totalVendido;

    }
}
