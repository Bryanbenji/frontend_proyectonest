import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { ProveedorService } from '../services/proveedor.service';
import { Proveedor } from '../models/proveedor';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre = '';
  imagenUrl = '';
  descripcion = '';
  precioCompra: number = null;
  categoria = '';
  nombreproveedor = '';

  categorias: Categoria[];
  proveedores: Proveedor[];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarProveedores();
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

  cargarProveedores(): void {
    this.proveedorService.lista().subscribe(
      proveedores => {
        this.proveedores = proveedores;
      },
      error => {
        this.toastr.error('Error al cargar los proveedores', 'Error');
      }
    );
  }

  onCreate(): void {
    const producto = new Producto(this.nombre, this.imagenUrl, this.descripcion,this.precioCompra, this.categoria, this.nombreproveedor);
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
