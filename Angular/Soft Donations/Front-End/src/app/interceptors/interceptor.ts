import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
const apiURL = environment.apiURL;

@Injectable()
export class CauseInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private route: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req.clone({
      url: `${apiURL}/${req.url}`,
      withCredentials: true,
      setHeaders: {
        'Content-Type': 'application/json'
      }
    })).pipe(
      tap(
        (res: any) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
          this.route.navigate(['/invalid-action']);
        },
        () => {
          console.log('Done!');
        })
    );

  };
}