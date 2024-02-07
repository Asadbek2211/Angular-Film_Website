import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorHandler } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  registerform =  new FormGroup({
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(10)
  ]),
  password: new FormControl('',[
     Validators.required,
     Validators.minLength(4),
     Validators.maxLength(10)
  ])
  });
  
  OnSubmits(){
    console.log(this.registerform);
  }
  NgModels(Ngmodelsobj:any){
    console.log(Ngmodelsobj)
  }
  get name(){
    return this.registerform.get('name')
  }
  
}
