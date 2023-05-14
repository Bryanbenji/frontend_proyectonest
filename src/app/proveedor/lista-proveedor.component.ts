import { TokenService } from '../services/token.service';
import { ProveedorService } from '../services/proveedor.service';
import { Proveedor } from '../models/proveedor';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css']
})
export class ListaProveedorComponent implements OnInit {

  proveedores: Proveedor[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private proveedorService: ProveedorService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarProveedores();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProveedores(): void {
    this.proveedorService.lista().subscribe(
      data => {
        this.proveedores = data;
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
        this.proveedorService.delete(id).subscribe(res => this.cargarProveedores());
        Swal.fire(
          'Eliminado',
          'Proveedor Elminado',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Proveedor a salvo',
          'error'
        );
      }
    });
  }

}
