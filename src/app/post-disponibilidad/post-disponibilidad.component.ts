import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { FormArray, FormBuilder,FormGroup, NgControlStatus, SelectMultipleControlValueAccessor, Validators} from '@angular/forms';
import { TaskService } from '../services/task.service';
import { carrera, ciclo } from '../interfaces/task';

@Component({
  selector: 'app-post-disponibilidad',
  templateUrl: './post-disponibilidad.component.html',
  styleUrls: ['./post-disponibilidad.component.css']
})
export class PostDisponibilidadComponent implements OnInit {
  public selectedCiclo : ciclo = {id_ciclo_escolar: 0, periodo: '', anio: 0, registro_grupos_inicio: '', registro_grupos_termino: '', registro_disponibilidad_inicio: '', registro_disponibilidad_termino: '',
    registro_contrataciones_inicio: '',
    registro_contrataciones_termino:'',
    registro_horarios_secretaria_inicio: '',
    registro_horarios_secretaria_termino: '',
    registro_aprobacion_coordi_docente_inicio: '',
    registro_aprobacion_coordi_docente_termino: ''};
    
  postDisponibilidadForm!: FormGroup;
  
  cicl: any;
  ciclo: any;
  constructor(
    private readonly fb: FormBuilder,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.cicl = this.getCiclos();
    this.postDisponibilidadForm = this.initForm();
  }
  onSubmit(): void{
    console.log('Form ->');
    console.log(this.postDisponibilidadForm.value);
    
    this.taskService.createTaskDisponibilidad(this.postDisponibilidadForm.value).subscribe((newTask) => {
      alert("Fue agregado correctamente");
    }, (error)=>{
      var status_error = error.status;
      if(status_error == 422 || status_error == 400 || status_error==403){
        window.alert("Se encuentra en mantenimiento la api, intentalo mas tarde");
      }
    });
    
    
  }

  initForm(): FormGroup {
    const datos =this.fb.group({
      id_usuario: 1,
      id_ciclo_escolar: 1,
      lunesEntrada: [''],
      lunesSalida: [''],
      martesEntrada: [''],
      martesSalida: [''],
      miercolesEntrada: [''],
      miercolesSalida: [''],
      juevesEntrada: [''],
      juevesSalida: [''],
      viernesEntrada: [''],
      viernesSalida: [''],
      sabadoEntrada: [''],
      sabadoSalida: ['']
    });
    return datos;
    
  }

  //getAllTasks() {
    //this.taskService.getAllTasks()
    //.subscribe(todos => {
      //console.log(todos);
    //});
  //}
   getCiclos() {
    this.taskService.getCiclo()
     .subscribe(todo => {
       this.ciclo = todo;
     });
   }
}
