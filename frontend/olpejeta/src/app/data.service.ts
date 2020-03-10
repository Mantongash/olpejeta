import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User, Birds, Sighting } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://olpejeta-apis.000webhostapp.com/api/users";
  birdUrl = "https://olpejeta-apis.000webhostapp.com/api/birds";
  sightingsUrl = "https://ddb5f4ac.ngrok.io/api/birds/sightings";

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<User[]>(this.apiUrl);
  }
  getBirds(){
    return this._http.get<Birds[]>(this.birdUrl);
  }
  getSightings(){
    return this._http.get<Sighting[]>(this.sightingsUrl);
  }
}
