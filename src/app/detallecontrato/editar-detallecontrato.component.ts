import { Component, OnInit } from '@angular/core';
import { DetalleContrato } from '../models/detallecontrato';
import { DetalleContratoService } from '../services/detallecontrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContratoService } from '../services/contrato.service';
import { Contrato } from '../models/contrato';

@Component({
  selector: 'app-editar-detallecontrato',
  templateUrl: './editar-detallecontrato.component.html',
  styleUrls: ['./editar-detallecontrato.component.css']
})
export class EditarDetalleContratoComponent implements OnInit {

  detallecontrato: DetalleContrato = null;

  contratos: Contrato[] = [];

  constructor(
    private detallecontratoService: DetalleContratoService,
    private contratoService: ContratoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.detallecontratoService.detail(id).subscribe(
      data => {
        this.detallecontrato = data;
      },
      err => {
        this.toastr.error(err.error.menssage, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
    this.contratoService.lista().subscribe(
      contratos => {
        this.contratos = contratos;
      },
      err => {
        console.error(err);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.detallecontratoService.update(id, this.detallecontrato).subscribe(
      data => {
        this.toastr.success(data.menssage, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        this.toastr.error(err.error.menssage, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaDetalleContratos']);
  }

}
