import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Birds } from 'src/app/user.model'

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  bird:Birds[];

  constructor(private dataservice: DataService) {}

  ngOnInit(){ 
    return this.dataservice.getBirds()
      .subscribe(data => this.bird = data)
  }

}
