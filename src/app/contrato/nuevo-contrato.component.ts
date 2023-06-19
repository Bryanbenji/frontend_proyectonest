import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../services/contrato.service';
import { Contrato } from '../models/contrato';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Proveedor } from '../models/proveedor';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-nuevo-contrato',
  templateUrl: './nuevo-contrato.component.html',
  styleUrls: ['./nuevo-contrato.component.css']
})
export class NuevoContratoComponent implements OnInit {

  identificador = '';
  fechaInicio ;
  fechaFin = null;
  proveedor = "";

  proveedores: Proveedor[] = [];

  constructor(
    private contratoService: ContratoService,
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.proveedorService.lista().subscribe(
      proveedores => {
        this.proveedores = proveedores;
      },
      err => {
        console.error(err);
      }
    );
  }
  formatDatesForBackend(): void {
    if (this.fechaInicio instanceof Date) {
      this.fechaInicio.setHours(0, 0, 0, 0);
    }
    if (this.fechaFin instanceof Date) {
      this.fechaFin.setHours(0, 0, 0, 0);
    }
  }

  onCreate(): void {
    this.formatDatesForBackend();
    const contrato = new Contrato(this.identificador, this.fechaInicio, this.fechaFin,this.proveedor);    
    this.contratoService.save(contrato).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        console.log(contrato)
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaContratos']);
  }
}
