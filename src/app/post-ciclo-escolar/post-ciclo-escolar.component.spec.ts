import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCicloEscolarComponent } from './post-ciclo-escolar.component';

describe('PostCicloEscolarComponent', () => {
  let component: PostCicloEscolarComponent;
  let fixture: ComponentFixture<PostCicloEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCicloEscolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCicloEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
