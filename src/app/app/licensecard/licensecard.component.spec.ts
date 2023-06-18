import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensecardComponent } from './licensecard.component';

describe('LicensecardComponent', () => {
  let component: LicensecardComponent;
  let fixture: ComponentFixture<LicensecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicensecardComponent]
    });
    fixture = TestBed.createComponent(LicensecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
