import { TokenService } from '../services/token.service';
import { ReporteContratoService } from '../services/reportecontrato.service';
import { ReporteContrato } from '../models/reportecontrato';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-reportecontrato',
  templateUrl: './lista-reportecontrato.component.html',
  styleUrls: ['./lista-reportecontrato.component.css']
})
export class ListaReporteContratoComponent implements OnInit {

  reportecontratos: ReporteContrato[] = [];
  reports: any;

  listaVacia = undefined;

  isAdmin: boolean;

  dates: any = {
    beginDate: new Date(),
    endDate: new Date(),
  };

  constructor(
    private reportecontratoService: ReporteContratoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarContratos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarContratos(): void {
    this.reportecontratoService.lista().subscribe(
      data => {
        this.reportecontratos = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  getReports() {
    this.reportecontratoService.getReports(this.dates).subscribe({
      next: (response) => {
        this.reports = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
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
        this.reportecontratoService.delete(id).subscribe(res => this.cargarContratos());
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
