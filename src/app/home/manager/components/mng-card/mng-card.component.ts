import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mng } from 'src/app/shared/models/mng.model';

@Component({
  selector: 'app-mng-card',
  templateUrl: './mng-card.component.html',
  styleUrls: ['./mng-card.component.scss']
})
export class MngCardComponent implements OnInit {

  @Input() mng!: Mng;

  @Output() onDeleteMng: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteMng() {
    this.onDeleteMng.emit();
  }

}
