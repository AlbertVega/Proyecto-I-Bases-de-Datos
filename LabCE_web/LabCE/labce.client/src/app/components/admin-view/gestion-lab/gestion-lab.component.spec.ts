import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLabComponent } from './gestion-lab.component';

describe('GestionLabComponent', () => {
  let component: GestionLabComponent;
  let fixture: ComponentFixture<GestionLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
