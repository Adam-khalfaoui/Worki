import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Models/Event';
import { favoris } from '../Models/favoris';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private http:HttpClient) { }
  public delete(id:number){
    return this.http.delete("http://localhost:8089/SpringMVCMajd/api/v1/registartion/fav/20/"+id);

    }
     public getEvents():Observable<Event[]>{
      return this.http.get<Event[]>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/fav/"+sessionStorage.getItem("email"));
    }
}
