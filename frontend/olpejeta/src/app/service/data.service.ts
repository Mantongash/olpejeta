import { Bird } from 'src/app/models/post';
import { Injectable } from '@angular/core';
import { User, Sighting, Species } from '../models/user.model'
// import { Bird } from './post';
import { Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  usersUrl = "https://olpejeta.000webhostapp.com/api/users";
  // birdUrl = "https://olpejeta-apis.000webhostapp.com/api/birds";
  // birdsUrl = "https://olpejeta.000webhostapp.com/getSpecies.php";
  
  searchOption=[]
  public birdsData: Bird[] 

  birdUrl : string = "https://cors-anywhere.herokuapp.com/https://olpejeta.000webhostapp.com/api/birds";

  constructor(private http: HttpClient) { }  

 

  getBirds() {
    return this.http.get<Bird[]>(this.birdUrl)
    }
  
  getBird(id: number) {
   return this.http.get<Bird>(this.birdUrl + "/" + id);
  }
  
  addBird(bird: Bird){
    return this.http.post(this.birdUrl, bird, httpOptions);
  }
  
  updateBird(bird: Bird) {
    return this.http.put(this.birdUrl + "/" + bird.id, bird);
  }
  
  deleteBird(id: any) {
    return this.http.delete(this.birdUrl + "/" + id);
  }


getUsers(){
    return this.http.get<User[]>(this.usersUrl);
  }

// getBirds(): Observable<Bird[]>{
//     return this.http.get<Bird[]>(this.birdUrl);
// }

getSightings(id:number){
  let sightingsUrl = `https://olpejeta.000webhostapp.com/api/users/${id}/sightings`
    return this.http.get(sightingsUrl);
}

// getSpecies(){
//   return this.http.get<Species[]>(this.speciesUrl);
// }

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
