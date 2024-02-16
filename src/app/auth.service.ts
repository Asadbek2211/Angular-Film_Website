import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:string[];
  constructor() { 
    this.users=["Sardor","Bunyod","Abror"]
  }
  public signIn(cedentils:any){
return false;
  }

  getUser():string[]{
    return this.users;
  }

  addUser(user:string):void{
this.users.push(user)      //malumot qo'shish uchun push dan foydalaniladi
  }
}
