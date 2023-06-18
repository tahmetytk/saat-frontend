import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcardComponent } from './uploadcard.component';

describe('UploadcardComponent', () => {
  let component: UploadcardComponent;
  let fixture: ComponentFixture<UploadcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadcardComponent]
    });
    fixture = TestBed.createComponent(UploadcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
