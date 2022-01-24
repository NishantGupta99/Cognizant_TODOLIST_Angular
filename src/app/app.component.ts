import { Component } from '@angular/core';
import User from 'src/app/entity/User'; // automatic import 
import UserService from 'src/app/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService){}
  title = 'Enter the Details';
  EmpData = {
    "department" : "Development",
    "Exp": 5
  }


 user:User = new User();
  save() {
    console.log('this person ' + this.user.firstname);
    console.log('wants to do this ' + this.user.todos);
    
    //this.userService.save(this.user);
   const promise = this.userService.save(this.user);
   promise.subscribe(function(response){
     console.log(response);
     
   })
  // title = 'todo-list';
  // constructor(){
  //   setTimeout(() => {
  //     this.title =" this is the changed value"
      
  //   }, 5000);
  }
}
