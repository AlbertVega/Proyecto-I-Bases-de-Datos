import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSidenavComponent } from './prof-sidenav.component';

describe('ProfSidenavComponent', () => {
  let component: ProfSidenavComponent;
  let fixture: ComponentFixture<ProfSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
