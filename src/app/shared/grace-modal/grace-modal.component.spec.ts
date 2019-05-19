import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraceModalComponent } from './grace-modal.component';

describe('GraceModalComponent', () => {
  let component: GraceModalComponent;
  let fixture: ComponentFixture<GraceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
