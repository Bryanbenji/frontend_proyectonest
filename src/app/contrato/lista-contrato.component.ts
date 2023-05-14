import { TokenService } from '../services/token.service';
import { ContratoService } from '../services/contrato.service';
import { Contrato } from '../models/contrato';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-contrato',
  templateUrl: './lista-contrato.component.html',
  styleUrls: ['./lista-contrato.component.css']
})
export class ListaContratoComponent implements OnInit {

  contratos: Contrato[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private contratoService: ContratoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarContratos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarContratos(): void {
    this.contratoService.lista().subscribe(
      data => {
        this.contratos = data;
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
        this.contratoService.delete(id).subscribe(res => this.cargarContratos());
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
