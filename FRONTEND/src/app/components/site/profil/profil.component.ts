import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { appuser } from 'src/app/Models/AppUser';
import { EventServiceService } from 'src/app/shared/event-service.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public profilfa:any = new appuser();

  public eventfa!:any[];
  constructor(private eventservice:EventServiceService,private usersercie:UserServiceService) { }

public getuser():void{
  this.usersercie.profil().subscribe(
    (response:any[])=>{
      this.profilfa=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );



}
public getEventf():void{
  this.eventservice.getEventuser().subscribe(
    (response:any[])=>{
      this.eventfa=response;
      console.log(response);
    },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );



}
  ngOnInit(): void {
    this.getuser();
    this.getEventf();
  }


}
