import { Bird } from 'src/app/models/post';
import { Injectable } from '@angular/core';
import { User, Sightings, Species } from '../models/user.model'
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
  // apiUrl = "https://olpejeta-apis.000webhostapp.com/api/birds";
  // speciesUrl = "https://olpejeta.000webhostapp.com/api/birds";
  
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

getSightings(id:number){
  let sightingsUrl = `https://olpejeta.000webhostapp.com/api/users/${id}/sightings`
    return this.http.get(sightingsUrl);
}

getSpecies(id:number){
  let apiUrl = `https://olpejeta.000webhostapp.com/api/birds/${id}/sightings`
    return this.http.get(apiUrl);
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
