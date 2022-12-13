import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInglesComponent } from './post-ingles.component';

describe('PostInglesComponent', () => {
  let component: PostInglesComponent;
  let fixture: ComponentFixture<PostInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
