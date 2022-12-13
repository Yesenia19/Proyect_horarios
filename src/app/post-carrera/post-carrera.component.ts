import { Component, ErrorHandler, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import { FormArray, FormBuilder,FormGroup, NgControlStatus, NgSelectOption, Validators} from '@angular/forms';
import { TaskService } from '../services/task.service';
import { coordinador } from '../interfaces/task';

@Component({
  selector: 'app-post-carrera',
  templateUrl: './post-carrera.component.html',
  styleUrls: ['./post-carrera.component.css'],
  
})
export class PostCarreraComponent implements OnInit {
  public selectedUser : coordinador = {id_usuario:0, nombre_usuario:'', apellido_paterno:'',apellido_materno:'',email:'',tipo_usuario:''};

  postCarreraForm!: FormGroup;
  coordis: any;
  coordinadores: any;

  constructor(
    private readonly fb: FormBuilder,
    private taskService:TaskService 
    ) {
    
   }


  ngOnInit(): void {
    this.coordis = this.getUsuarios();
    this.postCarreraForm = this.initForm();
   
  }

  onSubmit(): void{
    console.log('Form ->');
    /*console.log(this.postCarreraForm.value);*/
    
    this.taskService.createTaskCarrera(this.postCarreraForm.value).subscribe((newTask) => {
      alert("Fue agregado correctamente");
    }, (error)=>{
      var status_error = error.status;
      if(status_error == 422 || status_error == 400 || status_error==403){
        window.alert("Revisa los datos ingresados");
      }
    });
    this.taskService.getAllTasks().subscribe((newTask) => {
      console.log(newTask);
    });
    
    
  }

  initForm(): FormGroup {
    var datos =this.fb.group({
      nombre_carrera:[''],
      coordinador_carrera: [''],
    });
    
    return datos;
    
  }

  getUsuarios() {
    
   this.taskService.getUsers()
    .subscribe(todos => {
      this.coordinadores = todos;
    });
    

  }

  
  
  
}
