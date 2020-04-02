import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { User, Species } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users:User [];
  selectedUser: any;
  species:Species [];

  constructor(private dataservice: DataService
    ) { }

  ngOnInit(){ 
    return this.dataservice.getUsers()
      .subscribe(data => this.users = data)
  }

  selectUser(id:number){
    return this.dataservice.getSightings(id)
    .subscribe(data => this.selectedUser = data)
  }

}