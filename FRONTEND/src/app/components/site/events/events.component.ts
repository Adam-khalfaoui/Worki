import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Models/Demande';
import { Event } from 'src/app/Models/Event';
import { favoris } from 'src/app/Models/favoris';
import { DemandeService } from 'src/app/shared/demande.service';
import { EventServiceService } from 'src/app/shared/event-service.service';
import { FavorisService } from 'src/app/shared/favoris.service';
import { UserServiceService } from 'src/app/shared/user-service.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  public events!:any[];

  public eventfa!:any[];
  event:any = new Event();
  jwt:any = sessionStorage.getItem('email');
  eventf:any = new Event();
  favoriss:any = new favoris();
  demande:Demande = new Demande();
  constructor(private eventservice:EventServiceService,private loginser:UserServiceService, private favservice:FavorisService, private demandeservice:DemandeService) {

  }
  public  part(id:number){


           this.demandeservice.participate(id,this.demande).subscribe(


           );

    }



  public getEvents():void{
      this.eventservice.getEvents().subscribe(
        (response:any[])=>{
          this.events=response;
          console.log(response);
        },
          (error:HttpErrorResponse)=>
          {
            alert(error.message);
          }
        );



}
public getEventf():void{
  this.demandeservice.getDemandeu().subscribe(
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
 fav(id:number){
    this.eventservice.fav(id,this.favoriss).subscribe();

location.reload()
  }
ngOnInit(): void {

  this.getEvents();

  this.getEventf();
}
Logout(){
  this.loginser.logOut();
}

}
