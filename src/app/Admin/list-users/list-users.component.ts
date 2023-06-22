import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit{
  constructor(private userService: UserService, private http: HttpClient, ){


  }  
  ngOnInit(){
    this.userService.getAllUsers().subscribe(data  => {
      this.users = data;
      console.log("Users requested =>",data);

    });
  }

  status = false;
  // user!: Users[];
  users: any=[];
  // user: import("c:/Users/Shery/Desktop/zbss/src/app/interface/user").User[];
 
  addToggle()
  {
    this.status = !this.status;       
  }
  // users: any[] = [];
  
  
  
  
}




