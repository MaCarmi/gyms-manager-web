import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiList } from '../enums/api-list.enum';
import { Gym } from '../models/gym.model';
import { HttpService } from './http.service';

/**
 * Questo service si occuopa nello specifico di effettuare operazioni CRUD sull'entità gym,
 * vedi: https://github.com/simeraro1/gyms-manager-web/blob/ebee16cc8c7f0ab649c926d54eadb75e25a732d9/src/app/shared/models/gym.model.ts
 *
 * Nel costruttore di questo service viene iniettato il servizio HttpService<Gym>,
 * vedi: https://github.com/simeraro1/gyms-manager-web/blob/ebee16cc8c7f0ab649c926d54eadb75e25a732d9/src/app/shared/services/http.service.ts
 *
 * @export
 * @class GymService
 */
@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(
   private http: HttpService<Gym>
  ) {
  }

  get(id: number): Observable<Gym> {
    return this.http.get(`${ApiList.GET_GYM_BY_ID}`, id);
  }

  getAll(): Observable<Gym[]> {
    return this.http.getAll(`${ApiList.GET_GYMS}`);
  }

  create(body: Gym): Observable<Gym> {
    return this.http.create(`${ApiList.CREATE_GYM}`, body);
  }

  update(id: number, body: Gym): Observable<Gym> {
    return this.http.update(`${ApiList.UPDATE_GYM}`, id, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${ApiList.DELETE_GYM}`, id);
  }





}
