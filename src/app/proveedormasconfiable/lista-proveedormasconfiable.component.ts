import { TokenService } from '../services/token.service';
import { ProveedorMasConfiableService } from '../services/proveedormasconfiable.service';
import { ProveedorMasConfiable } from '../models/proveedormasconfiable';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-proveedormasconfiable',
  templateUrl: './lista-proveedormasconfiable.component.html',
  styleUrls: ['./lista-proveedormasconfiable.component.css']
})
export class ListaProveedorMasConfiableComponent implements OnInit {

  proveedormasconfiable: ProveedorMasConfiable[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private proveedormasconfiableService: ProveedorMasConfiableService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarReporteVentaProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarReporteVentaProductos(): void {
    this.proveedormasconfiableService.lista().subscribe(
      data => {
        this.proveedormasconfiable = data;
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
        this.proveedormasconfiableService.delete(id).subscribe(res => this.cargarReporteVentaProductos());
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
