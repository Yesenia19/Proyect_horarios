import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, NgControlStatus, SelectMultipleControlValueAccessor, Validators} from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-post-usuario',
  templateUrl: './post-usuario.component.html',
  styleUrls: ['./post-usuario.component.css']
})
export class PostUsuarioComponent implements OnInit {
  postUsuarioForm!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.postUsuarioForm = this.initForm();
  }
  onSubmit(): void{
    console.log('Form ->');
    console.log(this.postUsuarioForm.value);
    
    this.taskService.createTaskUsuario(this.postUsuarioForm.value).subscribe((newTask) => {
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
