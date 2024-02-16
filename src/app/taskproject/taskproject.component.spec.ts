import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskprojectComponent } from './taskproject.component';

describe('TaskprojectComponent', () => {
  let component: TaskprojectComponent;
  let fixture: ComponentFixture<TaskprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskprojectComponent]
    });
    fixture = TestBed.createComponent(TaskprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
