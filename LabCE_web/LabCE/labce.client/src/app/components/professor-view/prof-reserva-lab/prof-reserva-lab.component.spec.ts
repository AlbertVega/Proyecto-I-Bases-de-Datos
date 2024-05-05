import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfReservaLabComponent } from './prof-reserva-lab.component';

describe('ProfReservaLabComponent', () => {
  let component: ProfReservaLabComponent;
  let fixture: ComponentFixture<ProfReservaLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfReservaLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfReservaLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
