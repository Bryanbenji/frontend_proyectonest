import { Component, OnInit } from '@angular/core';
import { ProveedorMasConfiable } from '../models/proveedormasconfiable';
import { ProveedorMasConfiableService } from '../services/proveedormasconfiable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-proveedormasconfiable',
  templateUrl: './editar-proveedormasconfiable.component.html',
  styleUrls: ['./editar-proveedormasconfiable.component.css']
})
export class EditarProveedorMasConfiableComponent implements OnInit {

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
        this.toastr.error(err.error.menssage, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.proveedormasconfiableService.update(id, this.proveedormasconfiable).subscribe(
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
    this.router.navigate(['/listaProveedorMasConfiable']);
  }

}
