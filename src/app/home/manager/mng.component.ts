import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, switchMap, take } from 'rxjs';
import { Mng } from 'src/app/shared/models/mng.model';
import { MngService } from 'src/app/shared/services/mng.service';

@Component({
  selector: 'app-mng',
  templateUrl: './mng.component.html',
  styleUrls: ['./mng.component.scss']
})
export class MngComponent implements OnInit {

  public mngList: Mng[] = [];
  public newMngInEdit: boolean = false;
  public newMng: Mng = {} as Mng

  constructor(
    private mngService: MngService
  ) { }

  ngOnInit(): void {
    this.getMngs().subscribe();
  }

  public deleteMng(mng: Mng) {
    this.mngService.delete(mng.id).
      pipe(
        take(1),
        switchMap((res: any) => this.getMngs())
      ).subscribe();
  }

  public addMng() {
    this.newMngInEdit = !this.newMngInEdit
  }

  public changeNewMngIsInEdit() {
    this.newMngInEdit = !this.newMngInEdit;
  }

  public setNextAvailableId() {
    return this.mngList.length === 0? 0: Math.max(...this.mngList.map(mng => mng.id)) + 1
  }

  public createMng() {
    this.newMng.id = this.setNextAvailableId();
    this.mngService.create(this.newMng).pipe(
      take(1),
      switchMap((mng: Mng) => (mng.id !== null || mng.id !== undefined) ? this.getMngs() : of(false))
    ).subscribe((res: boolean) => {
      if (res) {
        this.newMng = {} as Mng;
        this.changeNewMngIsInEdit();
      }
    });
  }

  public discardNewMng() {
    this.newMng = {} as Mng;
    this.changeNewMngIsInEdit();
  }

  private getMngs() {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      this.mngService.getAll().subscribe({
        next: (mngs: Mng[]) => {
          this.mngList = mngs;
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
