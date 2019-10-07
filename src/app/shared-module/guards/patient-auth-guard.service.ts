import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class PatientAuthGuard implements CanActivate {
  constructor(private router: Router, private usersService: UsersService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isPatient = this.usersService.isPatientUser();
    if (isPatient) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
