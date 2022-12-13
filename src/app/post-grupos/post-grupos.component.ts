import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { FormArray, FormBuilder,FormGroup, NgControlStatus, SelectMultipleControlValueAccessor, Validators} from '@angular/forms';
import { TaskService } from '../services/task.service';
import { carrera, ciclo } from '../interfaces/task';


@Component({
  selector: 'app-post-grupos',
  templateUrl: './post-grupos.component.html',
  styleUrls: ['./post-grupos.component.css']
})
export class PostGruposComponent implements OnInit {
  public selectedCarrera : carrera = {id_carrera: 0, nombre_carrera: '', id_usuario: 0, nombre_usuario: '', apellido_paterno: '', apellido_materno: ''
  };
  public selectedCiclo : ciclo = {id_ciclo_escolar: 0, periodo: '', anio: 0, registro_grupos_inicio: '', registro_grupos_termino: '', registro_disponibilidad_inicio: '', registro_disponibilidad_termino: '',
    registro_contrataciones_inicio: '',
    registro_contrataciones_termino:'',
    registro_horarios_secretaria_inicio: '',
    registro_horarios_secretaria_termino: '',
    registro_aprobacion_coordi_docente_inicio: '',
    registro_aprobacion_coordi_docente_termino: ''};
    
  postGruposForm!: FormGroup;
  carrer: any;
  carrera: any;
  cicl: any;
  ciclo: any;

  constructor(
    private readonly fb: FormBuilder,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.carrer = this.getCarreras();
    this.cicl = this.getCiclos();
    this.postGruposForm = this.initForm();
  }
  
  onSubmit(): void{
    console.log('Form ->');
    console.log(this.postGruposForm.value);
    
    this.taskService.createTaskGrupos(this.postGruposForm.value).subscribe((newTask) => {
      alert("Fue agregado correctamente");
    }, (error)=>{
      var status_error = error.status;
      if(status_error == 422 || status_error == 400 || status_error==403){
        window.alert("Revisa los datos ingresados");
      }
    });
    
    
  }

  initForm(): FormGroup {
    const datos =this.fb.group({
      cuatrimestre: [''],
      no_grupo: [''],
      hora_entrada_minima: [''],
      hora_salida_maxima: [''],
      ciclo_escolar: 1,
      carrera: ['']
    });
    return datos;
    
  }

  //getAllTasks() {
    //this.taskService.getAllTasks()
    //.subscribe(todos => {
      //console.log(todos);
    //});
  //}
  getCarreras() {
    this.taskService.getCarrera()
     .subscribe(todos => {
       this.carrera = todos;
     });
   }
   getCiclos() {
    this.taskService.getCiclo()
     .subscribe(todo => {
       this.ciclo = todo;
     });
   }
  
}
