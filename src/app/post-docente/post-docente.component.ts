import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { FormArray, FormBuilder,FormGroup, NgControlStatus, SelectMultipleControlValueAccessor, Validators} from '@angular/forms';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-post-docente',
  templateUrl: './post-docente.component.html',
  styleUrls: ['./post-docente.component.css']
})
export class PostDocenteComponent implements OnInit {
  postDocenteForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.postDocenteForm = this.initForm();
  }
  onSubmit(): void{
    console.log('Form ->');
    console.log(this.postDocenteForm.value);
    
    this.taskService.createTaskDocente(this.postDocenteForm.value).subscribe((newTask) => {
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
      nombre_usuario: [''],
      apellido_paterno: [''],
      apellido_materno: [''],
      email: [''],
      tipo_usuario: ['']
    });
    return datos;
    
  }
}
