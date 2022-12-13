import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { PostCarreraComponent } from './post-carrera/post-carrera.component';
import { PostCicloEscolarComponent } from './post-ciclo-escolar/post-ciclo-escolar.component';
import { PostPlanEstudiosComponent } from './post-plan-estudios/post-plan-estudios.component';
import { PostGruposComponent } from './post-grupos/post-grupos.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PostDocenteComponent } from './post-docente/post-docente.component';
import { PostDisponibilidadComponent } from './post-disponibilidad/post-disponibilidad.component';
import { PostUsuarioComponent } from './post-usuario/post-usuario.component';
import { PostInglesComponent } from './post-ingles/post-ingles.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    PostCarreraComponent,
    PostCicloEscolarComponent,
    PostPlanEstudiosComponent,
    PostGruposComponent,
    PostDocenteComponent,
    PostDisponibilidadComponent,
    PostUsuarioComponent,
    PostInglesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:FormulariosComponent},
      {path:'carrera', component:PostCarreraComponent},
      {path:'cicloEscolar', component:PostCicloEscolarComponent},
      {path:'planEstudios', component:PostPlanEstudiosComponent},
      {path:'grupos', component:PostGruposComponent},
      {path:'docentes', component:PostDocenteComponent},
      {path:'disponibilidad', component:PostDisponibilidadComponent},
      {path:'usuarios', component:PostUsuarioComponent},
      {path:'ingles', component:PostInglesComponent},
    ])
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
