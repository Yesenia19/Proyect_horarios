import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlanEstudiosComponent } from './post-plan-estudios.component';

describe('PostPlanEstudiosComponent', () => {
  let component: PostPlanEstudiosComponent;
  let fixture: ComponentFixture<PostPlanEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPlanEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPlanEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
