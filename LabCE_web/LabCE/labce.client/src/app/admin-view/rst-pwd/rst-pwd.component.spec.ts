import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RstPwdComponent } from './rst-pwd.component';

describe('RstPwdComponent', () => {
  let component: RstPwdComponent;
  let fixture: ComponentFixture<RstPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RstPwdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RstPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
