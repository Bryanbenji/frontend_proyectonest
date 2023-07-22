import { TopProducto } from "../models/topproducto";

export interface Visitor {
    visitTopProducto(topproducto: TopProducto): void;
    // Agrega aquí otros métodos para visitar diferentes tipos de productos, si es necesario
  }