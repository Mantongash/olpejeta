import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Sighting } from 'src/app/user.model';

@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.css']
})
export class SightingsComponent implements OnInit {
  sightings:Sighting[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    return this.dataservice.getSightings()
      .subscribe(data => this.sightings = data)
  }
}
