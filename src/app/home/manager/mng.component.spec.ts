import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngComponent } from './mng.component';

describe('MngComponent', () => {
  let component: MngComponent;
  let fixture: ComponentFixture<MngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
