import { isNgTemplate } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
 
// selectedColor: string = 'black';

// changeColor(color: string): void {
//   this.selectedColor = color;
// }
users:string[];
constructor( private  userservice:UserService){
this.users=userservice.getUser();console.log(userservice)
}
addUser():void{
  const newUser=  prompt("user qo'shish");
  if(newUser){
    this.userservice.addUser(newUser);
    this.users= this.userservice.getUser()
  }

}
removeUser():void{
  let userRemove=prompt("delete text");
  if(userRemove){
    this.userservice.removeUser(userRemove);
    this.users=this.userservice.getUser();
  }
}

}
