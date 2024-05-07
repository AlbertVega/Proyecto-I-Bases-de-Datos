import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPrestamoTableComponent } from './prof-prestamo-table.component';

describe('ProfPrestamoTableComponent', () => {
  let component: ProfPrestamoTableComponent;
  let fixture: ComponentFixture<ProfPrestamoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfPrestamoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfPrestamoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
