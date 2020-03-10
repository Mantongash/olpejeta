import { Component, OnInit } from '@angular/core';
import { Sightings } from 'src/app/user.model'
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.css']
})
export class SightingsComponent implements OnInit {

  sightings:Sightings[];

  constructor(private dataservice: DataService) {}

  ngOnInit(){ 
    return this.dataservice.getSightings()
      .subscribe(data => this.sightings = data)
  }

}