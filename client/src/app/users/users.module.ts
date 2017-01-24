import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRouter } from './users.router';

import { UserService } from './shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRouter
  ],
  declarations: [ ],
  providers: [
    UserService
  ]
})

export class UsersModule { }
