import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetGraceComponent } from './meet-grace.component';

describe('MeetGraceComponent', () => {
  let component: MeetGraceComponent;
  let fixture: ComponentFixture<MeetGraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetGraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetGraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
