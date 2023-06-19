import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleContrato } from '../models/detallecontrato';

@Injectable({
  providedIn: 'root'
})
export class DetalleContratoService {

  detallecontratoURL = environment.detallecontratoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<DetalleContrato[]> {
    return this.httpClient.get<DetalleContrato[]>(`${this.detallecontratoURL}`);
  }

  public detail(id: number): Observable<DetalleContrato> {
    return this.httpClient.get<DetalleContrato>(`${this.detallecontratoURL}${id}`);
  }

  public save(detallecontrato: DetalleContrato): Observable<any> {
    return this.httpClient.post<any>(`${this.detallecontratoURL}`, detallecontrato);
  }

  public update(id: number, detallecontrato: DetalleContrato): Observable<any> {
    return this.httpClient.put<any>(`${this.detallecontratoURL}${id}`, detallecontrato);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.detallecontratoURL}${id}`);
  }
}