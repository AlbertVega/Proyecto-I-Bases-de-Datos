import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActivoComponent } from './gestion-activo.component';

describe('GestionActivoComponent', () => {
  let component: GestionActivoComponent;
  let fixture: ComponentFixture<GestionActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionActivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
