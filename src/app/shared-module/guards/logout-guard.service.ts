import {Injectable} from '@angular/core';
import { CanActivate} from '@angular/router';
import {UsersService} from '../services/users.service';

@Injectable()
export class LogoutGuardService implements CanActivate {
  constructor(private usersService: UsersService) {
  }

  canActivate(): boolean {

    return !this.usersService.isLogged();
  }

}
