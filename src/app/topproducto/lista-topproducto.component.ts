import * as XLSX from 'xlsx';

import { TokenService } from '../services/token.service';
import { TopProductoService } from '../services/topproducto.service';
import { TopProducto } from '../models/topproducto';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { ExcelVisitor } from '../models/excelvisitor';

@Component({
  selector: 'app-lista-topproducto',
  templateUrl: './lista-topproducto.component.html',
  styleUrls: ['./lista-topproducto.component.css']
})
export class ListaTopProductoComponent implements OnInit {

  topproductos: TopProducto[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private topproductoService: TopProductoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarReporteVentaProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarReporteVentaProductos(): void {
    this.topproductoService.lista().subscribe(
      data => {
        this.topproductos = data;
        console.log(this.topproductos);
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  descargarExcel(): void {
    const data: any[][] = [
      ['ID', 'Nombre', 'Imagen', 'Descripcion', 'Puntaje', 'Rentabilidad'],
      ...this.topproductos.map((topproducto) => [
        topproducto.id,
        topproducto.nombre,
        topproducto.imagenUrl,
        topproducto.descripcion,
        topproducto.puntaje,
        topproducto.rentabilidad,
      ]),
    ];

    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'Productos');

    // Guardar el archivo Excel en el cliente
    XLSX.writeFile(workBook, 'productos.xlsx');
  }

  borrar(id: number ): void {
    Swal.fire({
      title: 'Estás seguro?',
      text: 'No podras recuperar la información borrada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'No, mantenlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.topproductoService.delete(id).subscribe(res => this.cargarReporteVentaProductos());
        Swal.fire(
          'Eliminado',
          'Producto Elminado',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Producto a salvo',
          'error'
        );
      }
    });
  }

}
