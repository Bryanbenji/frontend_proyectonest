import { Component, OnInit } from '@angular/core';
import { TopProductoService } from '../services/topproducto.service';
import { TopProducto } from '../models/topproducto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-topproducto',
  templateUrl: './nuevo-topproducto.component.html',
  styleUrls: ['./nuevo-topproducto.component.css']
})
export class NuevoTopProductoComponent implements OnInit {

  nombre = '';
  descripcion = '';
  imagenUrl = '';
  puntaje: number = null;
  rentabilidad: '';


  constructor(
    private topproductoService: TopProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
  }


  onCreate(): void {
    const reporteventaproducto = new TopProducto(this.nombre, this.descripcion, this.imagenUrl, this.puntaje, this.rentabilidad);
    this.topproductoService.save(reporteventaproducto).subscribe(
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
    this.router.navigate(['/listaTopProducto']);
  }
}
