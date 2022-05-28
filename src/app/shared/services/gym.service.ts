import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiList } from '../enums/api-list.enum';
import { Gym } from '../models/gym.model';
import { HttpService } from './http.service';

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
