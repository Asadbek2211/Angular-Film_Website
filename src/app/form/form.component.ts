import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';

import { AsyncValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginValidation } from '../projects/LoginValidation';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {


 
  userform=new FormGroup({
    Name: new FormControl('',  [Validators.required,
    Validators.minLength(10) ,
  Validators.maxLength(15),
     ], LoginValidation.isTaken
 
     

 ),
  password:new FormControl('',[
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(15),
  
  ]),
  fax:new FormControl('',[
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(15), 
   
  ] )

  });
  get Name(){
    return this.userform.get('Name');
  }
  get password(){
    return this.userform.get('password');
  }
  get fax(){
    return this.userform.get('fax')
  }
}
