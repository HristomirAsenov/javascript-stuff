import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(route.data.authReq, this.userService.isLoggedIn);

    if (route.data.authReq !== this.userService.isLoggedIn) {
      return this.router.navigate(['/']);
    }

    // if (!this.userService.isLoggedIn) {
    //   return this.userService.authDone$.pipe(map(user => !!user), catchError(err => [false]))
    // }

    return true;
  }

}