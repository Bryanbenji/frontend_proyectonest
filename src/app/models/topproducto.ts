export class TopProducto {
    id?: number;
    nombre: string;
    imagenUrl: string;
    descripcion : string;
    puntaje: number;
    rentabilidad: string;


    constructor(nombre: string, imagenUrl: string,descripcion:string, puntaje: number, rentabilidad : string) {
        this.nombre = nombre;
        this.imagenUrl = imagenUrl;
        this.descripcion = descripcion;
        this.puntaje = puntaje;
        this.rentabilidad = rentabilidad;

    }
}