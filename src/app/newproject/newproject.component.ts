import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class NewProject {
  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    return this.http.post<any>('https://api.example.com/sendEmail', { email });
  }
}
