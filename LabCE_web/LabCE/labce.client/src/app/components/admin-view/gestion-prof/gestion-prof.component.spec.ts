import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfComponent } from './gestion-prof.component';

describe('GestionProfComponent', () => {
  let component: GestionProfComponent;
  let fixture: ComponentFixture<GestionProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
