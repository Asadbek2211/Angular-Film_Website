import { isNgTemplate } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange} from '@angular/flex-layout';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { NgModel, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  openDialog(dialogType: string): void {
    console.log(`Opening ${dialogType} dialog...`);
    // Bu yerda kerakli amallarni bajarish uchun kodni yozing
  }
// selectedColor: string = 'black';

// changeColor(color: string): void {
//   this.selectedColor = color;
// }
}
