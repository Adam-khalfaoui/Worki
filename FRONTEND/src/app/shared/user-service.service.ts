import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../Models/Registration';
import { LoginRequest } from '../Models/LoginRequest';
import {map} from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWTresponse } from '../Models/JWTResponse';
import { Observable } from 'rxjs';
import { appuser } from '../Models/AppUser';
import { AppUserRole } from '../Models/AppUserRole';
export class User {
  constructor(public status: string) {}
}
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  

  constructor(private http:HttpClient) { }
  public getusers():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVCMajd/app");
  }
  public csv():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVCMajd/export");
  }
  public profil():Observable<appuser[]>{
    return this.http.get<appuser[]>("http://localhost:8089/SpringMVCMajd/app/"+sessionStorage.getItem("email"));
  }
Login(loginRequest:LoginRequest){
      return this.http.post<LoginRequest>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/login",loginRequest);
      }
adduser(user:RegistrationRequest){
      return this.http.post<RegistrationRequest>("http://localhost:8089/SpringMVCMajd/api/v1/registartion",user);
      }
makeadmin(id:number,user:appuser){
      return this.http.put<appuser>("http://localhost:8089/SpringMVCMajd/admin/"+id,user);
      }
      authenticate(user:LoginRequest) {
        return this.http
          .post<any>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/login", user)
          .pipe(
            map(userData => {  
              sessionStorage.setItem("email", user.username);
              let tokenStr = "Bearer " + userData.token;
              sessionStorage.setItem("token", tokenStr); 
              
              return userData;
            })
          );
      }
      isUserLoggedIn() {
        let user = sessionStorage.getItem("email");
        console.log(!(user === null));
        return !(user === null);
      }
      logOut() {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("token");
      }
}
