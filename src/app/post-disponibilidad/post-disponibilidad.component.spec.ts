import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDisponibilidadComponent } from './post-disponibilidad.component';

describe('PostDisponibilidadComponent', () => {
  let component: PostDisponibilidadComponent;
  let fixture: ComponentFixture<PostDisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDisponibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
