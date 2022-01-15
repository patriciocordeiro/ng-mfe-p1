import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/services/user.service';
import { User } from './../shared/interfaces/user';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList!: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.userList;
  }

}
