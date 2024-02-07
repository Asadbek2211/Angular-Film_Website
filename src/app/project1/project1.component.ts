import { Component } from '@angular/core';
// import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorHandler } from '@angular/core';
import { OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { __exportStar } from 'tslib';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component  {
  name:string='';

  onNameChange(firstName: any) {
   console.log(firstName)
  }
  
 
}