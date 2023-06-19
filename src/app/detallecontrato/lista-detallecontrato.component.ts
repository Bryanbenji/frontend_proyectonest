import { TokenService } from '../services/token.service';
import { DetalleContratoService } from '../services/detallecontrato.service';
import { DetalleContrato } from '../models/detallecontrato';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-detallecontrato',
  templateUrl: './lista-detallecontrato.component.html',
  styleUrls: ['./lista-detallecontrato.component.css']
})
export class ListaDetalleContratoComponent implements OnInit {

  detallecontratos: DetalleContrato[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private detallecontratoService: DetalleContratoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarDetallesContratos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarDetallesContratos(): void {
    this.detallecontratoService.lista().subscribe(
      data => {
        this.detallecontratos = data;
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
        this.detallecontratoService.delete(id).subscribe(res => this.cargarDetallesContratos());
        Swal.fire(
          'Eliminado',
          'Contrato Elminado',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Contrato a salvo',
          'error'
        );
      }
    });
  }

}
