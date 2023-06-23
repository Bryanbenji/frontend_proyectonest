import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopProducto } from '../models/topproducto';

@Injectable({
  providedIn: 'root'
})
export class TopProductoService {

  topproductoURL = environment.topproductoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TopProducto[]> {
    return this.httpClient.get<TopProducto[]>(`${this.topproductoURL}`);
  }

  public detail(id: number): Observable<TopProducto> {
    return this.httpClient.get<TopProducto>(`${this.topproductoURL}${id}`);
  }

  public save(topproducto: TopProducto): Observable<any> {
    return this.httpClient.post<any>(`${this.topproductoURL}`, topproducto);
  }

  public update(id: number, topproducto: TopProducto): Observable<any> {
    return this.httpClient.put<any>(`${this.topproductoURL}${id}`, topproducto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.topproductoURL}${id}`);
  }
}
