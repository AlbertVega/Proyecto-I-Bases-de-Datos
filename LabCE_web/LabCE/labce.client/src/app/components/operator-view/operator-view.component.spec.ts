import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorViewComponent } from './operator-view.component';

describe('OperatorViewComponent', () => {
  let component: OperatorViewComponent;
  let fixture: ComponentFixture<OperatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperatorViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
