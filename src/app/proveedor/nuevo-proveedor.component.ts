import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../services/proveedor.service';
import { Proveedor } from '../models/proveedor';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit {

  ruc = '';
  nombre = '';
  telefono = '';
  email = '';

  constructor(
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const proveedor = new Proveedor(this.ruc, this.nombre, this.telefono, this.email);
    this.proveedorService.save(proveedor).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        console.log(proveedor)
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaProveedores']);
  }
}
