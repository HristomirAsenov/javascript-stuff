import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseBigDetailsComponent } from './cause-big-details.component';

describe('CauseBigDetailsComponent', () => {
  let component: CauseBigDetailsComponent;
  let fixture: ComponentFixture<CauseBigDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseBigDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseBigDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
