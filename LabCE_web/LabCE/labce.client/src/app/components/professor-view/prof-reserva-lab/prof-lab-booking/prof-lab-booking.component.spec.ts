import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfLabBookingComponent } from './prof-lab-booking.component';

describe('ProfLabBookingComponent', () => {
  let component: ProfLabBookingComponent;
  let fixture: ComponentFixture<ProfLabBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfLabBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfLabBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
