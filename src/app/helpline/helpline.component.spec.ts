import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineComponent } from './helpline.component';

describe('HelplineComponent', () => {
  let component: HelplineComponent;
  let fixture: ComponentFixture<HelplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelplineComponent]
    });
    fixture = TestBed.createComponent(HelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
