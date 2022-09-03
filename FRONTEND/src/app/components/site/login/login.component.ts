import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { RegistrationRequest } from 'src/app/Models/Registration';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = new RegistrationRequest();

  user1:any = new LoginRequest();
  constructor(private serviceuser :UserServiceService,private router: Router) { }
  email!: string;
  password!: string;
  msg = '';
  invalidLogin = false

  @Input() error!: string | null;
  ngOnInit(): void {
  }
  adduser(){
    this.serviceuser.adduser(this.user).subscribe(

    );


  location.reload()
    }
    checkLogin() {
      (this.serviceuser.authenticate(this.user).subscribe(
          data => {
            this.router.navigate(['/event'])
            this.invalidLogin = false
          },
          error => {
            this.invalidLogin = true
            this.error = error.message;

          }
        )
      );

    }

    login(){
      return this.serviceuser.Login(this.user1).subscribe();

      }
    }


