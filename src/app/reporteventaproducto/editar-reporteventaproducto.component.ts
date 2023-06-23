import { Component, OnInit } from '@angular/core';
import { ReporteVentaProducto } from '../models/reporteventaproducto';
import { ReporteVentaProductoService } from '../services/reporteventaproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-editar-reporteventaproducto',
  templateUrl: './editar-reporteventaproducto.component.html',
  styleUrls: ['./editar-reporteventaproducto.component.css']
})
export class EditarReporteVentaProductoComponent implements OnInit {

  reporteventaproducto: ReporteVentaProducto = null;

  productos: Producto[];

  constructor(
    private reporteventaproductoService: ReporteVentaProductoService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      productos => {
        this.productos = productos;
      },
      error => {
        this.toastr.error('Error al cargar los productos', 'Error');
      }
    );
  }

  ngOnInit(): void {
    this.cargarProductos();
    const id = this.activatedRoute.snapshot.params["id"];
    this.reporteventaproductoService.detail(id).subscribe(
      data => {
        this.reporteventaproducto = data;
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
    this.reporteventaproductoService.update(id, this.reporteventaproducto).subscribe(
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
    this.router.navigate(['/listaReporteVentaProducto']);
  }

}
