import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../models/proveedor';
@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrls: ['./detalle-proveedor.component.css']
})
export class DetalleProveedorComponent implements OnInit {

  proveedor: Proveedor = null;

  constructor(
    private proveedorService: ProveedorService, 
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }
  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.proveedorService.detail(id).subscribe(
      data => {
        this.proveedor = data;
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
    this.router.navigate(['/listaProveedores']);
  }

}
