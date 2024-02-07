import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NewwebsiteComponent } from './newwebsite/newwebsite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from './material/material';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

import { TableComponent } from './table/table.component';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';  

import { Project1Component } from './project1/project1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { FormComponent } from './form/form.component';
import { TodolistComponent } from './todolist/todolist.component';





@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NewwebsiteComponent,
    DialogComponentComponent,
    TableComponent,
    AppComponent,
    Project1Component,
    NavbarComponent,
    FormsComponent,
    FormComponent,
    TodolistComponent,
 
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  
 
    
  
  
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
