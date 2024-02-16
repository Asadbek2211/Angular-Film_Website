import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginValidation } from './LoginValidation';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
 
  userform=new FormGroup({
    account:new FormGroup({
      name:new FormControl('',[
      Validators.required
    ], LoginValidation.isTaken)
  })
    
  })

  get name(){
    return this.userform.get('account.name');
  }
  
constructor( private authservice:AuthService, private formbuilder:FormBuilder){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  SignIn(){
    let isValid= this.authservice.signIn(this.userform.value);
    if(!isValid){
      this.userform.setErrors({
        invalidLoding:true
      })
    }
  }
}
