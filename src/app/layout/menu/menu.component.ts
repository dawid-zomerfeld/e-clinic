import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared-module/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private redirectUrlDoctorSuccess = 'doctor';
  private redirectUrlPatientSuccess = 'patient';
  private redirectUrlAdminSuccess = 'admin';
  private redirectUrlRecepcionistSuccess = 'recepcionist';

  constructor(private router: Router, private usersService: UsersService) { }

  logout() {
    this.usersService.logout();
    this.router.navigate(['/home']);
  }

  redirectIfLogged() {
    if (this.usersService.isLogged()) {
      if (this.usersService.isDoctorUser()) {
        this.router.navigate([this.redirectUrlDoctorSuccess]);
      } else if (this.usersService.isPatientUser()) {
        this.router.navigate([this.redirectUrlPatientSuccess]);
      } else if (this.usersService.isAdminUser()) {
        this.router.navigate([this.redirectUrlAdminSuccess]);
      } else if (this.usersService.isRecepcionistUser()) {
        this.router.navigate([this.redirectUrlRecepcionistSuccess]);
      }
    }
  }

  ngOnInit() {
  }

}
