import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaURL = environment.categoriaURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.categoriaURL}`);
  }

  public detail(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.categoriaURL}${id}`);
  }

  public save(categoria: Categoria): Observable<any> {
    return this.httpClient.post<any>(`${this.categoriaURL}`, categoria);
  }

  public update(id: number, categoria: Categoria): Observable<any> {
    return this.httpClient.put<any>(`${this.categoriaURL}${id}`, categoria);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.categoriaURL}${id}`);
  }
}
