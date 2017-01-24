import { Injectable } from '@angular/core';
import { IUser } from './user.model';
@Injectable()
export class UserService {

  user: IUser;

  constructor() { }

}
