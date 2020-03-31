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
  selectedUser: any;

  constructor(private dataservice: DataService
    ) {}

  ngOnInit(){ 
    return this.dataservice.getUsers()
      .subscribe(data => this.users = data)

  }

  selectUser(id:number){
    return this.dataservice.getSightings(id)
    .subscribe(data => this.selectedUser = data)

    // let url = `https://olpejeta.000webhostapp.com/api/users/${id}/sightings`
    // this.selectedUser = url;
    // console.log(this.selectedUser);
  }
  
}
