import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Event } from '../Models/Event';
import { environment } from 'src/environments/environment';
import { favoris } from '../Models/favoris';
@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { 
  }
  public getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.apiServerUrl);
  }
  public getEventuser():Observable<Event[]>{
   return this.http.get<Event[]>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/fav/"+sessionStorage.getItem("email")); }
  public deleteEventById(id:number){
    return this.http.delete("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/"+id);

    }
    public getEvent(id:number){
      return this.http.get("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/"+id);
  
      }
      addEvent(event:Event){
        return this.http.post<Event>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/add",event);
        }
        updateEvent(id:number ,event:Event){
          return this.http.put<Event>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/update/"+id,event);
          }
      modif(event:Event){
        return this.http.put<Event>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/event/",event);
        }
      fav(id:number,favoriss:favoris){
        return this.http.post<favoris>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/fav/"+sessionStorage.getItem("email")+"/"+id,favoriss);
        }
}
