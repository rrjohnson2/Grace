import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraceNotificationComponent } from './grace-notification.component';

describe('GraceNotificationComponent', () => {
  let component: GraceNotificationComponent;
  let fixture: ComponentFixture<GraceNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraceNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraceNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
