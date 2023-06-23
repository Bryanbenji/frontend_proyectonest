import { Component, OnInit } from '@angular/core';
import { TopProductoService } from '../services/topproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TopProducto } from '../models/topproducto';
@Component({
  selector: 'app-detalle-topproducto',
  templateUrl: './detalle-topproducto.component.html',
  styleUrls: ['./detalle-topproducto.component.css']
})
export class DetalleTopProductoComponent implements OnInit {

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
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaTopProducto']);
  }

}
