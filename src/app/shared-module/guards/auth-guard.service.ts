import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TOKEN_NAME} from '../services/auth.const';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private usersService: UsersService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      if (this.usersService.isLogged()) {
        return true;
      } else {
        localStorage.removeItem(TOKEN_NAME);
        this.router.navigate(['home'], {queryParams: {redirectTo: state.url}});
        return false;
      }
    }

}
