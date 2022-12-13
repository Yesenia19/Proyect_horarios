import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGruposComponent } from './post-grupos.component';

describe('PostGruposComponent', () => {
  let component: PostGruposComponent;
  let fixture: ComponentFixture<PostGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGruposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
