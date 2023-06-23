import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { ProveedorService } from '../services/proveedor.service';
import { Proveedor } from '../models/proveedor';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = null;

  categorias: Categoria[];
  proveedores: Proveedor[];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

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

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarProveedores();
    const id = this.activatedRoute.snapshot.params["id"];
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
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
    this.productoService.update(id, this.producto).subscribe(
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
    this.router.navigate(['/listaProductos']);
  }

}
