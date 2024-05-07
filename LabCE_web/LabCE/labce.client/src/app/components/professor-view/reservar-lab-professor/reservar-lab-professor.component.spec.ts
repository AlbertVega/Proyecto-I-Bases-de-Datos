import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarLabProfessorComponent } from './reservar-lab-professor.component';

describe('ReservarLabProfessorComponent', () => {
  let component: ReservarLabProfessorComponent;
  let fixture: ComponentFixture<ReservarLabProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarLabProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservarLabProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
