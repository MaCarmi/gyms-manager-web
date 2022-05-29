import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

/**
 * Questo Angular Service si occupa di definire in modo generico dei metodi utili
 * al consumo di REST API, la classe in oggetto è parametrizzata "<T>", ciò significa
 * che quando questo servizio viene istanziato bisogna specificarne la Classe/Interfaccia/Tipo typescript
 *
 * Esempio: const http: HttpService<Gym>, vedi: https://github.com/simeraro1/gyms-manager-web/blob/ebee16cc8c7f0ab649c926d54eadb75e25a732d9/src/app/shared/services/gym.service.ts
 *
 * Nell'esempio abbiamo definito un  HttpService di tipo Gym, ciò significa che tutti i metodi che nella classe
 * generica usano T, nell'istanza specifica quel T verrà sostituito con la class Gym
 *
 * @export
 * @class HttpService
 * @template T
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {


  /**
   * Creates an instance of HttpService.
   * @param {HttpClient} http
   * HttpClient è un servizio fornito da Angular per il consumo di REST API
   * @memberof HttpService
   */
  constructor(
    private http: HttpClient
  ) { }


  /**
   * Metodo ti tipo GET
   * utilizza l'url e l'id per recuperare un oggetto specifico di tipo T
   *
   * @param {string} url
   * @param {number} id
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  public get(url: string, id: number,): Observable<T> {
    return this.http.get<T>(url.replace('{id}', id.toString()));
  }


  /**
   * Metodo di tipo GET
   * restituisce una lista di tipo T
   *
   * @param {string} url
   * @return {*}  {Observable<T[]>}
   * @memberof HttpService
   */
  public getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }


  /**
   * Metodo di tipo POST
   * effettua l'inserimento di una nuova istanza di tipo T, il body
   * la chiamata restituisce lo stesso oggetto che è stato appena creato
   *
   * @param {string} url
   * @param {T} body
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  public create(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }


  /**
   * Metodo di tipo POST
   * fa l'update di un oggetto T esistente, che viene individuato grazie all'id
   *
   * @param {string} url
   * @param {number} id
   * @param {T} body
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  public update(url: string, id: number, body: T): Observable<T> {
    return this.http.post<T>(url.replace('{id}', id.toString()), body);
  }



  /**
   * Metodo di tipo DELETE
   * cancella un oggetto di tipo T
   *
   * @param {string} url
   * @param {number} id
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  public delete(url: string, id: number): Observable<any> {
    return this.http.delete<any>(url.replace('{id}', id.toString()));
  }


}
