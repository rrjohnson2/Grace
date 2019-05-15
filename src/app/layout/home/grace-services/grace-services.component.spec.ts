import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraceServicesComponent } from './grace-services.component';

describe('GraceServicesComponent', () => {
  let component: GraceServicesComponent;
  let fixture: ComponentFixture<GraceServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraceServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
