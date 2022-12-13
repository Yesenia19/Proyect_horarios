import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  title = 'Generador de horarios';
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void{
    console.log('Form ->');
    console.log(this.contactForm.value);
    
  }

  initForm(): FormGroup {
    return this.fb.group({
      carrera:['', [Validators.required , Validators.minLength(1)]],
      coordinador:['', [Validators.required , Validators.minLength(1)]],
      aPaterno:['', [Validators.required , Validators.minLength(1)]],
      aMaterno:['', [Validators.required , Validators.minLength(1)]],
      email:['', [Validators.required , Validators.minLength(1)]],
      cuatrimestres: this.fb.array([this.fb.group({cuatrimestre:(['',Validators.required]),materia:(['',Validators.required]),totalHoras:(['',Validators.required]),totalHorasSemana:(['',Validators.required])})])
    });
    
  }

  get getCuatrimestres(){
    return this.contactForm.get('cuatrimestres') as FormArray;
    
  }
  addCuatrimestre(){
    const control =<FormArray>this.contactForm.controls['cuatrimestres'];
    control.push(this.fb.group({cuatrimestre:(['',Validators.required]),materia:(['',Validators.required]),totalHoras:(['',Validators.required]),totalHorasSemana:(['',Validators.required])}));
  }
}
