import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';

import { cicloescolar, grupos, Task, coordinador, carrera, ciclo,planestudios,disponibilidad, docente, usuario} from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  private api = 'https://schoolscheduleapi.herokuapp.com'
  constructor(
    private http: HttpClient
  ) { }
  getAllTasks() {
    const path = 'https://schoolscheduleapi.herokuapp.com/carreras';
    return this.http.get<Task[]>(path);
  }
  getUsers() {
    const path = 'https://schoolscheduleapi.herokuapp.com/usuarios';
    return this.http.get<coordinador[]>(path);
  }
  getCarrera() {
    const path = 'https://schoolscheduleapi.herokuapp.com/carreras';
    return this.http.get<carrera[]>(path);
  }
  getCiclo() {
    const path = 'https://schoolscheduleapi.herokuapp.com/ciclo_escolar/1';
    return this.http.get<ciclo[]>(path);
  }
  createTaskCarrera(task: Task) {
    const path = `${this.api}/carreras`;
    return this.http.post<Headers>(path, task);
  }
  createTaskCicloEscolar(cicloescolar: cicloescolar) {
    const path = `${this.api}/ciclo_escolar`;
    return this.http.post<Headers>(path, cicloescolar);
  }
  createTaskGrupos(grupos: grupos) {
    const path = `${this.api}/grupos`;
    return this.http.post<Headers>(path, grupos);
  }
  createTaskPlanestudios(plan: planestudios) {
    const path = `${this.api}/plan_estudios`;
    return this.http.post<Headers>(path,[plan]);
  }
  createTaskDisponibilidad(disponibilidad:disponibilidad) {
    const path = `${this.api}/disponibilidad`;
    return this.http.post<Headers>(path, disponibilidad);
  }
  createTaskDocente(docente:docente) {
    const path = `${this.api}/usuarios`;
    return this.http.post<Headers>(path, docente);
  }
  createTaskUsuario(usuario:usuario) {
    const path = `${this.api}/usuarios`;
    return this.http.post<Headers>(path, usuario);
  }
}
