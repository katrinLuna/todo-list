import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingGoalComponent } from './creating-goal.component';

describe('CreatingGoalComponent', () => {
  let component: CreatingGoalComponent;
  let fixture: ComponentFixture<CreatingGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
