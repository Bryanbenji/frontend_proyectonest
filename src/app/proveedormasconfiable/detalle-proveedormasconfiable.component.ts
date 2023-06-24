import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedorMasConfiable } from '../models/proveedormasconfiable';
import { ProveedorMasConfiableService } from '../services/proveedormasconfiable.service';
@Component({
  selector: 'app-detalle-proveedormasconfiable',
  templateUrl: './detalle-proveedormasconfiable.component.html',
  styleUrls: ['./detalle-proveedormasconfiable.component.css']
})
export class DetalleProveedorMasConfiableComponent implements OnInit {

  proveedormasconfiable: ProveedorMasConfiable = null;

  constructor(
    private proveedormasconfiableService: ProveedorMasConfiableService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.proveedormasconfiableService.detail(id).subscribe(
      data => {
        this.proveedormasconfiable = data;
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
    this.router.navigate(['/listaProveedorMasConfiable']);
  }

}
