import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../service/users.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css', '../../assets/css/patternfly.css', '../../assets/css/patternfly-additions.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }
  
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.usersService
        .getUser(id)
        .subscribe(contact => this.user = contact);
  }

}
