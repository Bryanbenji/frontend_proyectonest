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
import { EditarProveedorComponent } from './proveedor/editar-proveedor.component';
import { NuevoProveedorComponent } from './proveedor/nuevo-proveedor.component';
import { DetalleProveedorComponent } from './proveedor/detalle-proveedor.component';
import { ListaProveedorComponent } from './proveedor/lista-proveedor.component';
import { ListaContratoComponent } from './contrato/lista-contrato.component';
import { DetalleContratoComponent } from './contrato/detalle-contrato.component';
import { NuevoContratoComponent } from './contrato/nuevo-contrato.component';
import { EditarContratoComponent } from './contrato/editar-contrato.component';
import { ListaDetalleContratoComponent } from './detallecontrato/lista-detallecontrato.component';
import { DetalleDetalleContratoComponent } from './detallecontrato/detalle-detallecontrato.component';
import { NuevoDetalleContratoComponent } from './detallecontrato/nuevo-detallecontrato.component';
import { EditarDetalleContratoComponent } from './detallecontrato/editar-detallecontrato.component';
import { ListaReporteVentaProductoComponent } from './reporteventaproducto/lista-reporteventaproducto.component';
import { DetalleReporteVentaProductoComponent } from './reporteventaproducto/detalle-reporteventaproducto.component';
import { NuevoReporteVentaProductoComponent } from './reporteventaproducto/nuevo-reporteventaproducto.component';
import { EditarReporteVentaProductoComponent } from './reporteventaproducto/editar-reporteventaproducto.component';
import { DetalleTopProductoComponent } from './topproducto/detalle-topproducto.component';
import { ListaTopProductoComponent } from './topproducto/lista-topproducto.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listaProductos', component: ListaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'detalleProducto/:id', component: DetalleProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevoProducto', component: NuevoProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editarProducto/:id', component: EditarProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'listaReporteVentaProducto', component: ListaReporteVentaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'detalleReporteVentaProducto/:id', component: DetalleReporteVentaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevoReporteVentaProducto', component: NuevoReporteVentaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editarReporteVentaProducto/:id', component: EditarReporteVentaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'listaCategorias', component: ListaCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin','user']}},
  {path: 'detalleCategoria/:id', component: DetalleCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevaCategoria', component: NuevaCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'editarCategoria/:id', component: EditarCategoriaComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'listaProveedores', component: ListaProveedorComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'detalleProveedor/:id', component: DetalleProveedorComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'nuevoProveedor', component: NuevoProveedorComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'editarProveedor/:id', component: EditarProveedorComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}}, 
  {path: 'listaContratos', component: ListaContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'detalleContrato/:id', component: DetalleContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'nuevoContrato', component: NuevoContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editarContrato/:id', component: EditarContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'listaDetalleContratos', component: ListaDetalleContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'detalleDetalleContrato/:id', component: DetalleDetalleContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'nuevoDetalleContrato', component: NuevoDetalleContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editarDetalleContrato/:id', component: EditarDetalleContratoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'listaTopProducto', component: ListaTopProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'detalleTopProducto/:id', component: DetalleTopProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevoTopProducto', component: NuevoProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editarTopProducto/:id', component: EditarProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
