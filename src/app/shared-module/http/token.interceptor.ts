import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TOKEN_NAME} from '../services/auth.const';
import {Observable} from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url !== 'http://localhost:8080/oauth/token' && request.url !== ('http://localhost:8080' + '/users/register')) {
      const token = JSON.parse(localStorage.getItem(TOKEN_NAME));

      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token.access_token
        }
      });
    }
    return next.handle(request);
  }


}
