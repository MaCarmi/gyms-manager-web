import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMngCardComponent } from './add-mng-card.component';

describe('AddGymCardComponent', () => {
  let component: AddMngCardComponent;
  let fixture: ComponentFixture<AddMngCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMngCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMngCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
