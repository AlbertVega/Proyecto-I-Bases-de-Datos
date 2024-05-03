import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarLaboratorioComponent } from './reservar-laboratorio.component';

describe('ReservarLaboratorioComponent', () => {
  let component: ReservarLaboratorioComponent;
  let fixture: ComponentFixture<ReservarLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarLaboratorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservarLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
