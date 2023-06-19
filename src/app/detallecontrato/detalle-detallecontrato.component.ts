import { Component, OnInit } from '@angular/core';
import { DetalleContratoService } from '../services/detallecontrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DetalleContrato } from '../models/detallecontrato';
@Component({
  selector: 'app-detalle-detallecontrato',
  templateUrl: './detalle-detallecontrato.component.html',
  styleUrls: ['./detalle-detallecontrato.component.css']
})
export class DetalleDetalleContratoComponent implements OnInit {

  detallecontrato: DetalleContrato = null;

  constructor(
    private detallecontratoService: DetalleContratoService,
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
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaDetalleContratos']);
  }

}
