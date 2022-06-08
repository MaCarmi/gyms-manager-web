import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngCardComponent } from './mng-card.component';

describe('MngCardComponent', () => {
  let component: MngCardComponent;
  let fixture: ComponentFixture<MngCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
