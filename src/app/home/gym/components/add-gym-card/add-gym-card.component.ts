import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Gym } from 'src/app/shared/models/gym.model';
import { GymService } from 'src/app/shared/services/gym.service';

@Component({
  selector: 'app-add-gym-card',
  templateUrl: './add-gym-card.component.html',
  styleUrls: ['./add-gym-card.component.scss']
})
export class AddGymCardComponent implements OnInit {

  @Input() isEdit!: boolean;
  @Input() gym!: Gym;

  @Output() onAddGym: EventEmitter<boolean> = new EventEmitter();
  @Output() onCreatedGym: EventEmitter<any> = new EventEmitter();
  @Output() onDiscard: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void { }

  public addGym() {
    this.changeEdit();
  }

  public discard() {
    this.onDiscard.emit();
  }

  public createGym() {
    this.onCreatedGym.emit();
  }

  public isFormFilled() {
    return !!this.gym.name;
  }

  private changeEdit() {
    this.onAddGym.emit(this.isEdit)
  }

}
