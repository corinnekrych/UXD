import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../../assets/css/patternfly.css', '../../assets/css/patternfly-additions.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() userSelected = new EventEmitter<User>();
  @Output() userInitialized = new EventEmitter<User>();

  constructor() { }

  selectUser(): void {
    this.userSelected.emit(this.user);
  }

  ngOnInit() {
    this.userInitialized.emit(this.user);
  }

}
