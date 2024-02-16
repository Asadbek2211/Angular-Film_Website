import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:string[];
  constructor() { 
    this.users=["Sardor","Bunyod","Abror"]
  }
  getUser():string[]{
    return this.users;
  }

  addUser(user:string):void{
this.users.push(user)      //malumot qo'shish uchun push dan foydalaniladi
  }
  removeUser(user:string):void{
let index=this.users.indexOf(user);
if(index !==-1){
  this.users.slice(index, 1)
}
  }
}
