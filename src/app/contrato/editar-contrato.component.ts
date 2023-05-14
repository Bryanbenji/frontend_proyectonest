import { Component, OnInit } from '@angular/core';
import { Contrato } from '../models/contrato';
import { ContratoService } from '../services/contrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedorService } from '../services/proveedor.service';
import { Proveedor } from '../models/proveedor';

@Component({
  selector: 'app-editar-contrato',
  templateUrl: './editar-contrato.component.html',
  styleUrls: ['./editar-contrato.component.css']
})
export class EditarContratoComponent implements OnInit {

  contrato: Contrato = null;

  proveedores: Proveedor[] = [];

  constructor(
    private contratoService: ContratoService,
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.contratoService.detail(id).subscribe(
      data => {
        this.contrato = data;
      },
      err => {
        this.toastr.error(err.error.menssage, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
    this.proveedorService.lista().subscribe(
      proveedores => {
        this.proveedores = proveedores;
      },
      err => {
        console.error(err);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.contratoService.update(id, this.contrato).subscribe(
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
    this.router.navigate(['/listaContratos']);
  }

}
