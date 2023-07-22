// excelvisitor.ts

import * as XLSX from 'xlsx';
import { TopProducto } from './topproducto';
import { Visitor } from '../interface/visitor.interface';

export class ExcelVisitor implements Visitor {
  private topproductos: TopProducto[] = [];

  visitTopProducto(topproducto: TopProducto): void {
    this.topproductos.push(topproducto);
  }

  generarExcel(): void {
    const data: any[][] = [
      ['ID', 'Nombre', 'Imagen', 'Descripcion', 'Puntaje', 'Rentabilidad'],
      ...this.topproductos.map(topproducto => [
        topproducto.id,
        topproducto.nombre,
        topproducto.imagenUrl,
        topproducto.descripcion,
        topproducto.puntaje,
        topproducto.rentabilidad
      ])
    ];

    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'Productos');

    // Guardar el archivo Excel en el cliente
    XLSX.writeFile(workBook, 'productos.xlsx');
  }
}
