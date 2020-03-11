import { Injectable } from '@angular/core';
// import {HttpClient } from '@angular/common/http'
import { User, Sighting, Species } from './user.model'

import { Bird } from './post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl = "https://olpejeta-apis.000webhostapp.com/api/users";
<<<<<<< HEAD
  // birdUrl = "https://olpejeta-apis.000webhostapp.com/api/birds";
=======
  birdUrl = "https://olpejeta-apis.000webhostapp.com/api/birds";
>>>>>>> 70dcb6874158ed50309f3b2f2c666ba4072e5f9d
  sightingsUrl = "https://ddb5f4ac.ngrok.io/api/birds/sightings";
  speciesUrl = "https://olpejeta-apis.000webhostapp.com/api/birds/species";
  
  searchOption=[]
  public birdsData: Bird[] 
  birdUrl : string = "https://olpejeta-apis.000webhostapp.com/api/birds";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl);
  }

  getBirds(): Observable<Bird[]>{
    return this.http.get<Bird[]>(this.birdUrl);
}

filteredListOptions() {
  let birds = this.birdsData;
  let filteredBirdsList = [];
  for (let bird of birds) {
    for (let options of this.searchOption) {
      if (options.common_name === bird.common_name) {
        filteredBirdsList.push(bird);
      }
    }
  }
  console.log(filteredBirdsList);
  return filteredBirdsList;
}
}

// getBirds(){
//   // return this._http.get<Birds[]>(this.birdUrl);
// }
// getSightings(){
//   return this._http.get<Sighting[]>(this.sightingsUrl);
// }
// getSpecies(){
//   return this._http.get<Species[]>(this.speciesUrl);
// }
