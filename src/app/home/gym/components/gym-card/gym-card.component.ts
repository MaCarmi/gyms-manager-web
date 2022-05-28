import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gym } from 'src/app/shared/models/gym.model';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent implements OnInit {

  @Input() gym!: Gym;

  @Output() onDeleteGym: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteGym() {
    this.onDeleteGym.emit();
  }

}
