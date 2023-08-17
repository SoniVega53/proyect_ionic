import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public urlService: string = "http://localhost:8080/api/"
  

  constructor(public http: HttpClient) { }

  public getService(url: string): Observable<any> {
    return this.http.get<any>(this.urlService.concat(url))
  }

  public postServiceBody(url: string, body: any): Observable<any> {
    // const body = {
    //   dato: this.dato
    // };
    return this.http.post<any>(this.urlService.concat(url), body);
  }

  public postServiceParams(url: string, datos: any, params: HttpParams): Observable<any> {
    return this.http.post<any>(this.urlService.concat(url), datos, { params });
  }

  public putServiceBody(url: string, body: any): Observable<any> {
    return this.http.put<any>(this.urlService.concat(url), body);
  }

  public putServiceParams(url: string, datos: any, params: HttpParams): Observable<any> {
    return this.http.put<any>(this.urlService.concat(url), datos, { params });
  }



}
