import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User, Birds } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://760a09e7.ngrok.io/api/users';
  birdUrl = 'https://760a09e7.ngrok.io/api/birds';

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<User[]>(this.apiUrl);
  }
  getBirds(){
    return this._http.get<Birds[]>(this.birdUrl);
  }
}
