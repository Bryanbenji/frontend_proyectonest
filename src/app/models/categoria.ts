export class Categoria {
    id?: number;
    tipoCategoria: string;
    descripcion : string;
    
    constructor(tipoCategoria: string,descripcion:string) {
        this.tipoCategoria = tipoCategoria;
        this.descripcion = descripcion;
        
    }
}