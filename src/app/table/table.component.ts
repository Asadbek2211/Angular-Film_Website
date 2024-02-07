import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
date:string="Date";
orderid:string="Order ID";date1:number=217
orderid1:number=200435;
orderid2:number=200436;
orderid3:number=200437;
orderid4:number=200435;
name:string="Name";
name1:string="John Doe"
price:string="Price";
price1:string="Iphone X 64GB Grey"
Quantitiy:string="Quantity";
quantiy1:number=1;
Total:string="Total";
total1:number=999.00;
coder:any=[
  {"Name":"Bunyod Mirxalilov",
     "id":1,
     "daraja":"Team Leader"},
     {
      "Name":"John Doe",
      "id":2,
      "daraja":"Beginner"
     },
     {"Name":"Mark Sukerberg",
    "id":3,
  "daraja":"Beginner"},
  {"Name":"Ilon Mask",
"id":4,
"daraja":"Beginer"}
]
}
