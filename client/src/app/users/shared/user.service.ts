import { Injectable } from '@angular/core';
import { IUser } from './user';
@Injectable()
export class UserService {

  user: IUser;

  constructor() { }

}
