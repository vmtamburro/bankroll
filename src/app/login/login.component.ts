import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users;

  constructor(private userService : UserService) 
  {
    userService.get().subscribe((data: any) => this.users = data);
    console.log(this.users);
  }

  ngOnInit(): void {
  }

}
