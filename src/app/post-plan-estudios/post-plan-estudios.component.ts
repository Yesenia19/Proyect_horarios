import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, Validators} from '@angular/forms';
import { group } from '@angular/animations';
import { TaskService } from '../services/task.service';
import { carrera } from '../interfaces/task';

@Component({
  selector: 'app-post-plan-estudios',
  templateUrl: './post-plan-estudios.component.html',
  styleUrls: ['./post-plan-estudios.component.css']
})
export class PostPlanEstudiosComponent implements OnInit {
  title = 'Generador de horarios';
  postPlanEstudios!: FormGroup;
  public selectedCarrera : carrera = {id_carrera: 0, nombre_carrera: '', id_usuario: 0, nombre_usuario: '', apellido_paterno: '', apellido_materno: ''
  };
  carrer: any;
  carrera: any;
  cicl: any;
  ciclo: any;

  constructor(private readonly fb: FormBuilder,
    private taskService:TaskService) { }

  ngOnInit(): void {
    this.postPlanEstudios = this.initForm();
    this.carrer = this.getCarreras();
  }
  onSubmit(): void{
    console.log('Form ->');
    /*console.log([this.postPlanEstudios.value]);*/
    this.taskService.createTaskPlanestudios(this.postPlanEstudios.value).subscribe((newTask) => {
      alert("Fue agregado correctamente");
    }, (error)=>{
      var status_error = error.status;
      if(status_error == 422 || status_error == 400 || status_error==403){
        window.alert("Revisa los datos ingresados");
      }
    });
  }

  initForm(): FormGroup {
    const datos = this.fb.group({
          carrera:[''],
          cuatrimestre:[''],
          nombre_materia:[''],
          total_horas:[''],
          total_horas_semana:['']
        })
     ;
    return datos;
   
  }


  //getAllTasks() {
    //this.taskService.getAllTasks()
    //.subscribe(todos => {
      //console.log(todos);
    //});
  //}

  get getCuatrimestres(){
    return this.postPlanEstudios.get('cuatrimestres') as FormArray;
    
  }
  /*addCuatrimestre(){
    const control =<FormArray>this.postPlanEstudios.controls['cuatrimestres'];
    control.push(
        this.fb.group({
        carrera: [''],
        cuatrimestre:[''],
        materia:[''],
        totalHoras:[''],
        totalHorasSemana:['']
      })
    );
  }*/
  getCarreras() {
    this.taskService.getCarrera()
     .subscribe(todos => {
       this.carrera = todos;
     });
   }
   getCiclos() {
    this.taskService.getCiclo()
     .subscribe(todos => {
       this.ciclo = todos;
     });
   }
  
}
