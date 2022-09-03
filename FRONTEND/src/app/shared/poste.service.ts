import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comments} from '../Models/comments'
import {Poste} from "../Models/poste";


@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private deleteUrl = 'http://localhost:8089/SpringMVCMajd/Actuality/delete-post'

  postesUrl = "http://localhost:8089/SpringMVCMajd/Actuality/get-all-posts";

  constructor(private _http: HttpClient) {
  }

  addPoste="http://localhost:8089/SpringMVCMajd/Actuality/create-post"
  public AddPoste(poste: Poste) {
    return this._http.post<Comments>(`${this.addPoste}`, poste);

  }





  getPostes(): Observable<any> {
    return this._http.get(`${this.postesUrl}`);

  }


  deletePoste(id: number): Observable<any> {
    return this._http.delete(`${this.deleteUrl}/${id}`, {responseType: 'text'});
  }

  ////Blockhain

  balance = "http://localhost:8089/SpringMVCMajd/chain/allwallet";


  getBalance(): Observable<any> {
    return this._http.get(`${this.balance}`);
  }

  publickey = "http://localhost:8089/SpringMVCMajd/chain/public-key"


  getPublicKey(): Observable<any> {
    return this._http.get("http://localhost:8089/SpringMVCMajd/chain/public-key");
  }








  likeurl = "http://localhost:8089/SpringMVCMajd/Actuality/likepost"


  getLikes(id: number): Observable<any> {
    return this._http.put(`${this.likeurl}/${id}`, {responseType: 'text'});
  }


  Dlikeurl = "http://localhost:8089/SpringMVCMajd/Actuality/disLikepost"


  getDLikes(id: number): Observable<any> {
    return this._http.put(`${this.Dlikeurl}/${id}`, {responseType: 'text'});
  }

 addcommenturl="http://localhost:8089/SpringMVCMajd/Actuality/add-comment"
  public createComment(comment: Comments,id: number) {
    return this._http.post<Comments>(`${this.addcommenturl}/${id}`, comment);

  }





  getBlock(): Observable<any> {
    return this._http.get("http://localhost:8089/SpringMVCMajd/chain/blocks");
  }


}
