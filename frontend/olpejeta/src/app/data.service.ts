import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://760a09e7.ngrok.io/api/users';

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<User[]>(this.apiUrl);
  }
}
