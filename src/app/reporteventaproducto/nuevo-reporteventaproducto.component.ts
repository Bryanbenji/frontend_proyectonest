import { Component, OnInit } from '@angular/core';
import { ReporteVentaProductoService } from '../services/reporteventaproducto.service';
import { ReporteVentaProducto } from '../models/reporteventaproducto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-nuevo-reporteventaproducto',
  templateUrl: './nuevo-reporteventaproducto.component.html',
  styleUrls: ['./nuevo-reporteventaproducto.component.css']
})
export class NuevoReporteVentaProductoComponent implements OnInit {

  nombreproducto = '';
  precioVenta: number = null;
  totalVendido: number = null;

  productos: Producto[];

  constructor(
    private reporteventaproductoService: ReporteVentaProductoService,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      productos => {
        this.productos = productos;
      },
      error => {
        this.toastr.error('Error al cargar las categorías', 'Error');
      }
    );
  }

  onCreate(): void {
    const reporteventaproducto = new ReporteVentaProducto(this.nombreproducto, this.precioVenta, this.totalVendido);
    this.reporteventaproductoService.save(reporteventaproducto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        console.log(reporteventaproducto);
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaReporteVentaProducto']);
  }
}
