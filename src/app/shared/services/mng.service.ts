import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiList } from '../enums/api-list.enum';
import { Mng } from '../models/mng.model';
import { HttpService } from './http.service';

/**
 * Questo service si occuopa nello specifico di effettuare operazioni CRUD sull'entità Mng,
 * vedi: https://github.com/simeraro1/Mngs-manager-web/blob/ebee16cc8c7f0ab649c926d54eadb75e25a732d9/src/app/shared/models/Mng.model.ts
 *
 * Nel costruttore di questo service viene iniettato il servizio HttpService<Mng>,
 * vedi: https://github.com/simeraro1/Mngs-manager-web/blob/ebee16cc8c7f0ab649c926d54eadb75e25a732d9/src/app/shared/services/http.service.ts
 *
 * @export
 * @class MngService
 */
@Injectable({
  providedIn: 'root'
})
export class MngService {

  constructor(
   private http: HttpService<Mng>
  ) {
  }

  get(id: number): Observable<Mng> {
    return this.http.get(`${ApiList.GET_MNG_BY_ID}`, id);
  }

  getAll(): Observable<Mng[]> {
    return this.http.getAll(`${ApiList.GET_MNG}`);
  }

  create(body: Mng): Observable<Mng> {
    return this.http.create(`${ApiList.CREATE_MNG}`, body);
  }

  update(id: number, body: Mng): Observable<Mng> {
    return this.http.update(`${ApiList.UPDATE_MNG}`, id, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${ApiList.DELETE_MNG}`, id);
  }





}
