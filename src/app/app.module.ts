import { interceptorProvider } from './interceptors/producto.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DetalleCategoriaComponent } from './categoria/detalle-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria.component';
import { NuevaCategoriaComponent } from './categoria/nueva-categoria.component';
import { ListaCategoriaComponent } from './categoria/lista-categoria.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';


//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DetalleProveedorComponent } from './proveedor/detalle-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor.component';
import { NuevoProveedorComponent } from './proveedor/nuevo-proveedor.component';
import { ListaProveedorComponent } from './proveedor/lista-proveedor.component';
import { ListaContratoComponent } from './contrato/lista-contrato.component';
import { NuevoContratoComponent } from './contrato/nuevo-contrato.component';
import { EditarContratoComponent } from './contrato/editar-contrato.component';
import { DetalleContratoComponent } from './contrato/detalle-contrato.component';
import { DetalleDetalleContratoComponent } from './detallecontrato/detalle-detallecontrato.component';
import { EditarDetalleContratoComponent } from './detallecontrato/editar-detallecontrato.component';
import { NuevoDetalleContratoComponent } from './detallecontrato/nuevo-detallecontrato.component';
import { ListaDetalleContratoComponent } from './detallecontrato/lista-detallecontrato.component';
import { DetalleReporteVentaProductoComponent } from './reporteventaproducto/detalle-reporteventaproducto.component';
import { EditarReporteVentaProductoComponent } from './reporteventaproducto/editar-reporteventaproducto.component';
import { NuevoReporteVentaProductoComponent } from './reporteventaproducto/nuevo-reporteventaproducto.component';
import { ListaReporteVentaProductoComponent } from './reporteventaproducto/lista-reporteventaproducto.component';
import { ListaTopProductoComponent } from './topproducto/lista-topproducto.component';
import { DetalleTopProductoComponent } from './topproducto/detalle-topproducto.component';
import { EditarTopProductoComponent } from './topproducto/editar-topproducto.component';
import { NuevoTopProductoComponent } from './topproducto/nuevo-topproducto.component';
import { DetalleProveedorMasConfiableComponent } from './proveedormasconfiable/detalle-proveedormasconfiable.component';
import { EditarProveedorMasConfiableComponent } from './proveedormasconfiable/editar-proveedormasconfiable.component';
import { NuevoProveedorMasConfiableComponent } from './proveedormasconfiable/nuevo-proveedormasconfiable.component';
import { ListaProveedorMasConfiableComponent } from './proveedormasconfiable/lista-proveedormasconfiable.component';
import { ListaReporteContratoComponent } from './reportecontrato/lista-reportecontrato.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent,
    ListaReporteVentaProductoComponent,
    NuevoReporteVentaProductoComponent,
    EditarReporteVentaProductoComponent,
    DetalleReporteVentaProductoComponent,
    ListaCategoriaComponent,
    NuevaCategoriaComponent,
    EditarCategoriaComponent,
    DetalleCategoriaComponent,
    ListaProveedorComponent,
    NuevoProveedorComponent,
    EditarProveedorComponent,
    DetalleProveedorComponent,   
    ListaContratoComponent,
    NuevoContratoComponent,
    EditarContratoComponent,
    DetalleContratoComponent,  
    ListaDetalleContratoComponent,
    NuevoDetalleContratoComponent,
    EditarDetalleContratoComponent,
    DetalleDetalleContratoComponent,
    ListaTopProductoComponent,
    NuevoTopProductoComponent,
    EditarTopProductoComponent,
    DetalleTopProductoComponent,
    ListaProveedorMasConfiableComponent,
    NuevoProveedorMasConfiableComponent,
    EditarProveedorMasConfiableComponent,
    DetalleProveedorMasConfiableComponent,
    ListaReporteContratoComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
