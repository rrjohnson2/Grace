import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraceModalLargeComponent } from './grace-modal-large.component';

describe('GraceModalLargeComponent', () => {
  let component: GraceModalLargeComponent;
  let fixture: ComponentFixture<GraceModalLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraceModalLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraceModalLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
