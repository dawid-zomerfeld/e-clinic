import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TOKEN_NAME} from '../services/auth.const';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(tap(event => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            localStorage.removeItem(TOKEN_NAME);
            this.router.navigate(['home']);
            return false;
          }
        }
      }));
  }
}
