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



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent,
    ListaCategoriaComponent,
    NuevaCategoriaComponent,
    EditarCategoriaComponent,
    DetalleCategoriaComponent,
    ListaProveedorComponent,
    NuevoProveedorComponent,
    EditarProveedorComponent,
    DetalleProveedorComponent,
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
