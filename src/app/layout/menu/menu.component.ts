import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared-module/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private usersService: UsersService) { }

  logout() {
    this.usersService.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
