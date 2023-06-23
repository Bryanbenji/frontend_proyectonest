import { Component, OnInit } from '@angular/core';
import { TopProducto } from '../models/topproducto';
import { TopProductoService } from '../services/topproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-topproducto',
  templateUrl: './editar-topproducto.component.html',
  styleUrls: ['./editar-topproducto.component.css']
})
export class EditarTopProductoComponent implements OnInit {

  topproducto: TopProducto = null;


  constructor(
    private topproductoService: TopProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }



  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.topproductoService.detail(id).subscribe(
      data => {
        this.topproducto = data;
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
    this.topproductoService.update(id, this.topproducto).subscribe(
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
    this.router.navigate(['/listaTopProducto']);
  }

}
