import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpComponent } from './new-exp.component';

describe('NewExpComponent', () => {
  let component: NewExpComponent;
  let fixture: ComponentFixture<NewExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExpComponent]
    });
    fixture = TestBed.createComponent(NewExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
