import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class DoctorAuthGuard implements CanActivate {
  constructor(private router: Router, private usersService: UsersService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isDoctor = this.usersService.isDoctorUser();
    if (isDoctor) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
