import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public users: Array<any>;
  public user: any = { id: undefined, email: '', password: ''};

  constructor(private userService: UserService) {
    userService.get().subscribe((data: any) => (this.users = data));
  }

  ngOnInit(): void {}

  public GetUsers(){
    return this.users;
  }

  public Login =  function(event) {
    debugger;
  };
}
