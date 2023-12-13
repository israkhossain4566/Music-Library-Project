import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateComponent } from './deactivate.component';

describe('DeactivateComponent', () => {
  let component: DeactivateComponent;
  let fixture: ComponentFixture<DeactivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeactivateComponent]
    });
    fixture = TestBed.createComponent(DeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
