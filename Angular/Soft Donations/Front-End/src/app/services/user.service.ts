import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../components/user/user.model';
import { shareReplay, tap } from 'rxjs/operators';
import { cookieHelper } from '../helpers/cookie.helper';

@Injectable({ providedIn: 'root' })
export class UserService {

    authDone$ = this.http.get('auth').pipe(shareReplay(1));
    _user = null;

    constructor(private http: HttpClient) {
        this.authDone$.subscribe((user: any) => {
            this._user = user;
        }, () => {
            this._user = null;
        })
    }

    get isLoggedIn() {
        return !!this._user;
    }

    get user() {
        return this._user;
    }

    login(email: string, password: string) {
        return this.http.post<User>('user/login', { email, password });
    }

    register(email: string, password: string) {
        return this.http.post<User>('user/register', { email, password });
    }

    logout() {
        return this.http.post('user/logout', {}).pipe(tap(() => {
            this._user = null;
        }));
    }

}