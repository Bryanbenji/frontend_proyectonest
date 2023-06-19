import { Component, OnInit } from '@angular/core';
import { DetalleContratoService } from '../services/detallecontrato.service';
import { DetalleContrato } from '../models/detallecontrato';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Contrato } from '../models/contrato';
import { ContratoService } from '../services/contrato.service';

@Component({
  selector: 'app-nuevo-detallecontrato',
  templateUrl: './nuevo-detallecontrato.component.html',
  styleUrls: ['./nuevo-detallecontrato.component.css']
})
export class NuevoDetalleContratoComponent implements OnInit {

  identificadorContrato = '';
  fechaEntregaRealizada = null;
  descripcion = "";

  contratos: Contrato[] = [];

  constructor(
    private detallecontratoService: DetalleContratoService,
    private contratoService: ContratoService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.contratoService.lista().subscribe(
      proveedores => {
        this.contratos = proveedores;
      },
      err => {
        console.error(err);
      }
    );
  }
  formatDatesForBackend(): void {    
    if (this.fechaEntregaRealizada instanceof Date) {
      this.fechaEntregaRealizada.setHours(0, 0, 0, 0);
    }
  }

  onCreate(): void {
    this.formatDatesForBackend();
    const detallecontrato = new DetalleContrato(this.identificadorContrato, this.fechaEntregaRealizada,this.descripcion);    
    this.detallecontratoService.save(detallecontrato).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        console.log(detallecontrato)
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaDetalleContratos']);
  }
}
