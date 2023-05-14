import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  contratoURL = environment.contratoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Contrato[]> {
    return this.httpClient.get<Contrato[]>(`${this.contratoURL}`);
  }

  public detail(id: number): Observable<Contrato> {
    return this.httpClient.get<Contrato>(`${this.contratoURL}${id}`);
  }

  public save(contrato: Contrato): Observable<any> {
    return this.httpClient.post<any>(`${this.contratoURL}`, contrato);
  }

  public update(id: number, contrato: Contrato): Observable<any> {
    return this.httpClient.put<any>(`${this.contratoURL}${id}`, contrato);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.contratoURL}${id}`);
  }
}