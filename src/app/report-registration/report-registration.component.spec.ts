import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRegistrationComponent } from './report-registration.component';

describe('ReportRegistrationComponent', () => {
  let component: ReportRegistrationComponent;
  let fixture: ComponentFixture<ReportRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportRegistrationComponent]
    });
    fixture = TestBed.createComponent(ReportRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
