import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from '../Models/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }
  participate(id:number,demande:Demande){
    return this.http
    .post<Demande>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/demande/"+sessionStorage.getItem("email")+"/"+id,demande);
    }
    acc(id:number,demande:Demande){
      return this.http.post<Demande>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/demande/accept/"+id,demande);
      }
      ref(id:number,demande:Demande){
        return this.http.post<Demande>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/demande/refuser/"+id,demande);
        }
        getDemande():Observable<Demande[]>{
          return this.http.get<Demande[]>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/demande/");
          }
          getDemandeu():Observable<Event[]>{
            return this.http.get<Event[]>("http://localhost:8089/SpringMVCMajd/api/v1/registartion/demande/"+sessionStorage.getItem("email"));
            }
}
