import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FlexModule,
    FlexLayoutModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class UserModule { }
