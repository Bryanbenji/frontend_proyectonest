import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedorMasConfiable } from '../models/proveedormasconfiable';

@Injectable({
  providedIn: 'root'
})
export class ProveedorMasConfiableService {

  proveedormasconfiableURL = environment.proveedormasconfiableURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ProveedorMasConfiable[]> {
    return this.httpClient.get<ProveedorMasConfiable[]>(`${this.proveedormasconfiableURL}`);
  }

  public detail(id: number): Observable<ProveedorMasConfiable> {
    return this.httpClient.get<ProveedorMasConfiable>(`${this.proveedormasconfiableURL}${id}`);
  }

  public save(proveedormasconfiable: ProveedorMasConfiable): Observable<any> {
    return this.httpClient.post<any>(`${this.proveedormasconfiableURL}`, proveedormasconfiable);
  }

  public update(id: number, proveedormasconfiable: ProveedorMasConfiable): Observable<any> {
    return this.httpClient.put<any>(`${this.proveedormasconfiableURL}${id}`, proveedormasconfiable);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.proveedormasconfiableURL}${id}`);
  }
}
