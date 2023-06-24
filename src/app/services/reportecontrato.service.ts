import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReporteContrato } from '../models/reportecontrato';

@Injectable({
  providedIn: 'root'
})
export class ReporteContratoService {

  reportecontratoURL = environment.reportecontratoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ReporteContrato[]> {
    return this.httpClient.get<ReporteContrato[]>(`${this.reportecontratoURL}`);
  }

  public detail(id: number): Observable<ReporteContrato> {
    return this.httpClient.get<ReporteContrato>(`${this.reportecontratoURL}${id}`);
  }

  public save(reportecontrato: ReporteContrato): Observable<any> {
    return this.httpClient.post<any>(`${this.reportecontratoURL}`, reportecontrato);
  }

  public update(id: number, contrato: ReporteContrato): Observable<any> {
    return this.httpClient.put<any>(`${this.reportecontratoURL}${id}`, contrato);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.reportecontratoURL}${id}`);
  }

  getReports(dates: any) {
    return this.httpClient.post(`${this.reportecontratoURL}minicore`, dates);
  }
}