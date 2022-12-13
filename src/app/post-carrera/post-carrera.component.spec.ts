import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCarreraComponent } from './post-carrera.component';

describe('PostCarreraComponent', () => {
  let component: PostCarreraComponent;
  let fixture: ComponentFixture<PostCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
