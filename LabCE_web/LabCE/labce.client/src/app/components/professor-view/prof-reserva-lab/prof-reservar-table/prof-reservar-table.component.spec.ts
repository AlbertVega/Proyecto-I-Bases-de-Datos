import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfReservarTableComponent } from './prof-reservar-table.component';

describe('ProfReservarTableComponent', () => {
  let component: ProfReservarTableComponent;
  let fixture: ComponentFixture<ProfReservarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfReservarTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfReservarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
