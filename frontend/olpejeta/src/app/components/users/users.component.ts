import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users;

  selectedUser: User;
  onSelect(user: User): void {
  this.selectedUser = user;
}

  constructor(private dataservice: DataService
    ) { }

  ngOnInit(){ 
    this.users = this.dataservice.getUsers();
  }
}
