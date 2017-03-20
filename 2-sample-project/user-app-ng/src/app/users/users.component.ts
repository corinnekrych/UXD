import { Component, OnInit } from '@angular/core';
import { User, Address, Geo, Company } from '../model/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;

  constructor(private service: UsersService) { 
  }

  ngOnInit() {
    this.service.list().subscribe(items => this.users = items);
  }

}
