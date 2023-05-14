import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../services/contrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contrato } from '../models/contrato';
@Component({
  selector: 'app-detalle-contrato',
  templateUrl: './detalle-contrato.component.html',
  styleUrls: ['./detalle-contrato.component.css']
})
export class DetalleContratoComponent implements OnInit {

  contrato: Contrato = null;

  constructor(
    private contratoService: ContratoService,
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
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaContratos']);
  }

}
