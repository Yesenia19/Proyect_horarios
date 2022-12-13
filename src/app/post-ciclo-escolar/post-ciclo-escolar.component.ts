import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { FormArray, FormBuilder,FormControl,FormGroup, NgControlStatus, Validators} from '@angular/forms';
import { TaskService } from '../services/task.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-post-ciclo-escolar',
  templateUrl: './post-ciclo-escolar.component.html',
  styleUrls: ['./post-ciclo-escolar.component.css']
})
export class PostCicloEscolarComponent implements OnInit {
  postCicloEscolarForm!: FormGroup;
  public fechaminima1!:Date;
  public fechaStrMinima!:String;
  
  constructor(
    private readonly fb: FormBuilder,
    private taskService:TaskService,
    private pd:DatePipe,

  ) { }

  ngOnInit(): void {
    this.postCicloEscolarForm = this.initForm();
    this.fechaminima1 = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDay()+1);
    //this.fechaStrMinima = this.pd.transform(this.fechaminima1, "yyyy-MM-dd");
  }
  onSubmit(): void{
    console.log('Form ->');
    console.log(this.postCicloEscolarForm.value);
    
    this.taskService.createTaskCicloEscolar(this.postCicloEscolarForm.value).subscribe((newTask) => {
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
      periodo:[''],
      anio:[''],
      registro_grupos_inicio:[''],
      registro_grupos_termino:[''],
      registro_disponibilidad_inicio:[''],
      registro_disponibilidad_termino:[''],
      registro_contrataciones_inicio:[''],
      registro_contrataciones_termino:[''],
      registro_horarios_secretaria_inicio:[''],
      registro_horarios_secretaria_termino:[''],
      registro_aprobacion_coordi_docente_inicio:[''],
      registro_aprobacion_coordi_docente_termino:['']
    });
    return datos;
    
  }

  //getAllTasks() {
    //this.taskService.getAllTasks()
    //.subscribe(todos => {
      //console.log(todos);
    //});
  //}
  /*class validadoresEspeciales {
    public static validarFechas(elemento:FormControl){
      let texto = elemento.value

      console.log("fecha",texto)
    
    }
  }*/
  
}







  
