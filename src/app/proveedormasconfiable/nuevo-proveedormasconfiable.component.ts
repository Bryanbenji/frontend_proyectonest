import { Component, OnInit } from '@angular/core';
import { ProveedorMasConfiableService } from '../services/proveedormasconfiable.service';
import { ProveedorMasConfiable } from '../models/proveedormasconfiable';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-proveedormasconfiable',
  templateUrl: './nuevo-proveedormasconfiable.component.html',
  styleUrls: ['./nuevo-proveedormasconfiable.component.css']
})
export class NuevoProveedorMasConfiableComponent implements OnInit {

  ruc = '';
  nombreproveedor = '';
  producto = '';
  puntaje: number = null;
  recindir: '';


  constructor(
    private proveedormasconfiableService: ProveedorMasConfiableService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
  }


  onCreate(): void {
    const proveedormasconfiable = new ProveedorMasConfiable(this.ruc, this.nombreproveedor, this.producto, this.puntaje, this.recindir);
    this.proveedormasconfiableService.save(proveedormasconfiable).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        console.log(proveedormasconfiable);
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaProveedorMasConfiable']);
  }
}
