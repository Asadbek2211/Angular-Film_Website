
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() dialogOpened = new EventEmitter<string>();
  firstname: string = ''; 
  email:string='';
  services:string='';
  budget:string='';
  textarea:string='';
  TextAreachange(){
    console.log(this.textarea)
  }
  EmailChange(){
    console.log(this.email);
  }
  FirstNameschange() {
    console.log(this.firstname);
  }
  Serviceschange(){
    console.log(this.services)
  }
  Budgetchange(){
    console.log(this.budget)
  }
  databseform = new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(18)
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
      Validators.email
    ]),
    services:new FormControl('',[
      Validators.required
    ]),
    budget:new FormControl('',[
      Validators.required
    ]),
    textarea:new FormControl('',[
      Validators.required,
    ])
  })
  alerts(){
    alert("sent")
  }
  get name(){
    return this.databseform.get('name');
  }
}
