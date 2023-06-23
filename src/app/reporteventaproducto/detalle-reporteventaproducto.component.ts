import { Component, OnInit } from '@angular/core';
import { ReporteVentaProductoService } from '../services/reporteventaproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReporteVentaProducto } from '../models/reporteventaproducto';
@Component({
  selector: 'app-detalle-reporteventaproducto',
  templateUrl: './detalle-reporteventaproducto.component.html',
  styleUrls: ['./detalle-reporteventaproducto.component.css']
})
export class DetalleReporteVentaProductoComponent implements OnInit {

  reporteventaproducto: ReporteVentaProducto = null;

  constructor(
    private reporteventaproductoService: ReporteVentaProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.reporteventaproductoService.detail(id).subscribe(
      data => {
        this.reporteventaproducto = data;
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
    this.router.navigate(['/listaReporteVentaProducto']);
  }

}
