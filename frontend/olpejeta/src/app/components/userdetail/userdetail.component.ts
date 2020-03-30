import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Sightings, User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})

export class UserdetailComponent implements OnInit {
usersightings;
userId;

  constructor(private dataservice: DataService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.userId;
    this.usersightings = this.dataservice.getUsersightings(this.userId);
  }

}
