import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingComponent } from './counseling.component';

describe('CounselingComponent', () => {
  let component: CounselingComponent;
  let fixture: ComponentFixture<CounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounselingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
