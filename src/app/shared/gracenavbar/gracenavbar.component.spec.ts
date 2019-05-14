import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GracenavbarComponent } from './gracenavbar.component';

describe('GracenavbarComponent', () => {
  let component: GracenavbarComponent;
  let fixture: ComponentFixture<GracenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GracenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GracenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
