import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { TodolistValidators } from './todolist';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  userform=new FormGroup({
    Name: new FormControl('',  [Validators.required,
    Validators.minLength(10) ,
  Validators.maxLength(15),
  TodolistValidators.noSpace,

 ] ,  TodolistValidators.isTaken
 
     

 ),
  
  });
  get Name(){
    return this.userform.get('Name');
  }
 

}
