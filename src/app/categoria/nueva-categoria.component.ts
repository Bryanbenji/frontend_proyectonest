import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {

  tipoCategoria = '';
  descripcion = '';

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const categoria = new Categoria(this.tipoCategoria, this.descripcion);
    this.categoriaService.save(categoria).subscribe(
      data => {
        console.log(categoria)
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaCategorias']);
  }
}
