import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Bird } from 'src/app/models/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})

export class SpeciesDetailComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    
  }


  }



