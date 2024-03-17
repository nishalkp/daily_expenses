import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpComponent } from './view-exp.component';

describe('ViewExpComponent', () => {
  let component: ViewExpComponent;
  let fixture: ComponentFixture<ViewExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewExpComponent]
    });
    fixture = TestBed.createComponent(ViewExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
