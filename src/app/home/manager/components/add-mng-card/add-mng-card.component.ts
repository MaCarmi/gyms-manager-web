import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Mng } from 'src/app/shared/models/mng.model';
import { MngService } from 'src/app/shared/services/mng.service';

@Component({
  selector: 'app-add-mng-card',
  templateUrl: './add-mng-card.component.html',
  styleUrls: ['./add-mng-card.component.scss']
})
export class AddMngCardComponent implements OnInit {

  @Input() isEdit!: boolean;
  @Input() mng!: Mng;

  @Output() onAddMng: EventEmitter<boolean> = new EventEmitter();
  @Output() onCreatedMng: EventEmitter<any> = new EventEmitter();
  @Output() onDiscard: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void { }

  public addMng() {
    this.changeEdit();
  }

  public discard() {
    this.onDiscard.emit();
  }

  public createMng() {
    this.onCreatedMng.emit();
  }

  public isFormFilled() {
    return !!this.mng.name;
  }

  private changeEdit() {
    this.onAddMng.emit(this.isEdit)
  }

}
