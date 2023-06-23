import { TokenService } from '../services/token.service';
import { TopProductoService } from '../services/topproducto.service';
import { TopProducto } from '../models/topproducto';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

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
