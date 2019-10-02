import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class ManagerAuthGuard implements CanActivate {
  constructor(private router: Router, private usersService: UsersService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isManager = this.usersService.isManagerUser();
    if (isManager) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
