import { TokenService } from '../services/token.service';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private categoriaService: CategoriaService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarCategorias();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarCategorias(): void {
    this.categoriaService.lista().subscribe(
      data => {
        this.categorias = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  borrar(id: number ): void {
    Swal.fire({
      title: 'Estás seguro?',
      text: 'No podras recuperar la información borrada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'No, mantenlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.delete(id).subscribe(res => this.cargarCategorias());
        Swal.fire(
          'Eliminado',
          'Categoria Elminada',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Categoria a salvo',
          'error'
        );
      }
    });
  }

}
