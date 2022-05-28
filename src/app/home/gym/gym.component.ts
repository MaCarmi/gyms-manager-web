import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, switchMap, take } from 'rxjs';
import { Gym } from 'src/app/shared/models/gym.model';
import { GymService } from 'src/app/shared/services/gym.service';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  public gymList: Gym[] = [];
  public newGymInEdit: boolean = false;
  public newGym: Gym = {} as Gym

  constructor(
    private gymService: GymService
  ) { }

  ngOnInit(): void {
    this.getGyms().subscribe();
  }

  public deleteGym(gym: Gym) {
    this.gymService.delete(gym.id).
      pipe(
        take(1),
        switchMap((res: string) => this.getGyms())
      ).subscribe();
  }

  public addGym() {
    this.newGymInEdit = !this.newGymInEdit
  }

  public changeNewGymIsInEdit() {
    this.newGymInEdit = !this.newGymInEdit;
  }

  public setNextAvailableId() {
    return Math.max(...this.gymList.map(gym => gym.id)) + 1;
  }

  public createGym() {
    this.newGym.id = this.setNextAvailableId();
    this.gymService.create(this.newGym).pipe(
      take(1),
      switchMap((gym: Gym) => (gym.id !== null || gym.id !== undefined) ? this.getGyms() : of(false))
    ).subscribe((res: boolean) => {
      if (res) {
        this.newGym = {} as Gym;
        this.changeNewGymIsInEdit();
      }
    });
  }

  public discardNewGym() {
    this.newGym = {} as Gym;
    this.changeNewGymIsInEdit();
  }

  private getGyms() {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      this.gymService.getAll().subscribe({
        next: (gyms: Gym[]) => {
          this.gymList = gyms;
          this.setNextAvailableId();
          observer.next(true),
            observer.complete()
        },
        error: (error: any) => {
          console.log(error),
            observer.next(false),
            observer.complete()
        }
      })
    })
  }


}
