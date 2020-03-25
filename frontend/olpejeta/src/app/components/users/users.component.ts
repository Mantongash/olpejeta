import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { User } from '../../models/user.model';

import { Sighting } from '../../models/post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users:User [];

  constructor(private dataservice: DataService
    ) {}

  ngOnInit(){ 
    return this.dataservice.getUsers()
      .subscribe(data => this.users = data)
  }
}
