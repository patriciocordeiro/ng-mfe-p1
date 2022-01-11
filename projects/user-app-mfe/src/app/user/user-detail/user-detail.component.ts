import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/interfaces/user';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user!: User;


  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSelectedUser();
  }

  getSelectedUser() {
    const userId = this.activatedRoute.snapshot.params.id;
    this.user = this.userService.userList.filter(e => e.id == userId)[0];
  }

}
