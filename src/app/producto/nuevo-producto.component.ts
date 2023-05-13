import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre = '';
  descripcion = '';
  precioVenta: number = null;
  precioCompra: number = null;
  totalVendido: number = null;
  categoriaId: number = null;

  categorias: Categoria[];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.cargarCategorias();
  }

  onCategoriaChange(event: any): void {
    this.categoriaId = Number(event.target.value);
  }

  cargarCategorias(): void {
    this.categoriaService.lista().subscribe(
      categorias => {
        this.categorias = categorias;
      },
      error => {
        this.toastr.error('Error al cargar las categorías', 'Error');
      }
    );
  }

  onCreate(): void {
    const producto = new Producto(this.nombre, this.descripcion, this.precioVenta,this.precioCompra, this.totalVendido, this.categoriaId);
    console.log(this.categoriaId);
    this.productoService.save(producto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        console.log(producto);
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaProductos']);
  }
}
