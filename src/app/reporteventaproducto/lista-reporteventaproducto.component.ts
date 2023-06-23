import { TokenService } from '../services/token.service';
import { ReporteVentaProductoService } from '../services/reporteventaproducto.service';
import { ReporteVentaProducto } from '../models/reporteventaproducto';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-reporteventaproducto',
  templateUrl: './lista-reporteventaproducto.component.html',
  styleUrls: ['./lista-reporteventaproducto.component.css']
})
export class ListaReporteVentaProductoComponent implements OnInit {

  reporteventaproductos: ReporteVentaProducto[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private reporteventaproductoService: ReporteVentaProductoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarReporteVentaProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarReporteVentaProductos(): void {
    this.reporteventaproductoService.lista().subscribe(
      data => {
        this.reporteventaproductos = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
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
        this.reporteventaproductoService.delete(id).subscribe(res => this.cargarReporteVentaProductos());
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
