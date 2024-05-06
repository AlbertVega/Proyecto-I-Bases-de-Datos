import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionOpComponent } from './aprobacion-op.component';

describe('AprobacionOpComponent', () => {
  let component: AprobacionOpComponent;
  let fixture: ComponentFixture<AprobacionOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AprobacionOpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AprobacionOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
