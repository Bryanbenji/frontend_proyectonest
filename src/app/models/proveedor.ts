export class Proveedor {
    id? : number;
    ruc : string;
    nombre : string;   
    telefono : string;
    email : string;
    
    constructor(ruc : string, nombre : string, telefono : string, email : string) {
        this.ruc = ruc;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        
    }
}