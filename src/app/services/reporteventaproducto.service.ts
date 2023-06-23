import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReporteVentaProducto } from '../models/reporteventaproducto';

@Injectable({
  providedIn: 'root'
})
export class ReporteVentaProductoService {

  reporteventaproductoURL = environment.reporteventaproductoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ReporteVentaProducto[]> {
    return this.httpClient.get<ReporteVentaProducto[]>(`${this.reporteventaproductoURL}`);
  }

  public detail(id: number): Observable<ReporteVentaProducto> {
    return this.httpClient.get<ReporteVentaProducto>(`${this.reporteventaproductoURL}${id}`);
  }

  public save(reporteventaproducto: ReporteVentaProducto): Observable<any> {
    return this.httpClient.post<any>(`${this.reporteventaproductoURL}`, reporteventaproducto);
  }

  public update(id: number, reporteventaproducto: ReporteVentaProducto): Observable<any> {
    return this.httpClient.put<any>(`${this.reporteventaproductoURL}${id}`, reporteventaproducto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.reporteventaproductoURL}${id}`);
  }
}