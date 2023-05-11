import { TokenService } from './../services/token.service';
import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private productoService: ProductoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
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
        this.productoService.delete(id).subscribe(res => this.cargarProductos());
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
