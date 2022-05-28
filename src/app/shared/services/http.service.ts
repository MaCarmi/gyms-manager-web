import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string, id: number,): Observable<T> {
    return this.http.get<T>(url.replace('{id}', id.toString()));
  }

  public getAll(url: string): Observable<T[]>{
    return this.http.get<T[]>(url);
  }

  public create(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }

  public update(url: string, id: number, body: T): Observable<T> {
    return this.http.post<T>(url.replace('{id}', id.toString()), body);
  }

  public delete(url: string, id: number): Observable<any> {
    return this.http.delete<any>(url.replace('{id}', id.toString()));
  }


}
