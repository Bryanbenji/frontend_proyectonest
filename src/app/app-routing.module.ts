import { ProductoGuard } from './guards/producto.guard';
import { LoginGuard } from './guards/login.guard';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { DetalleCategoriaComponent } from './categoria/detalle-categoria.component';
import { NuevaCategoriaComponent } from './categoria/nueva-categoria.component';
import { ListaCategoriaComponent } from './categoria/lista-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listaProductos', component: ListaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'detalleProducto/:id', component: DetalleProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevoProducto', component: NuevoProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'editarProducto/:id', component: EditarProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'listaCategorias', component: ListaCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'detalleCategoria/:id', component: DetalleCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevaCategoria', component: NuevaCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'editarCategoria/:id', component: EditarCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
