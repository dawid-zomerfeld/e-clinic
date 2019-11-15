import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class BadRequestInterceptor implements HttpInterceptor {

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.snackBar.open('O podanej godzinie istnieje już wizyta!');
          }
          if (error.status === 400) {
            if (error.message === 'Http failure response for http://localhost:8080/oauth/token: 400 OK') {
              this.snackBar.open('Nieprawidłowy adres email, bądź hasło!');
            }
            if (error.message === 'Http failure response for http://localhost:8080/users/register: 400 OK') {
              this.snackBar.open('Podałeś niepoprawny adres email, bądź numer pesel!');
            }
            if (error.message === 'Http failure response for http://localhost:8080/admin/add/doctor: 400 OK') {
              this.snackBar.open('Podany adres email jest zajęty!');
            }
            if (error.message === 'Http failure response for http://localhost:8080/admin/add/recepcionist: 400 OK') {
              this.snackBar.open('Podany adres email jest zajęty!');
            }
          }
          return throwError(error);
        }) );
  }
}
