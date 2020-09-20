import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Cause } from '../components/causes/cause.model';
import { Observable, forkJoin } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class CauseService {

    causes: Cause[] = [];

    causeDetails = new EventEmitter<Cause>();

    constructor(private http: HttpClient, private userService: UserService) { }

    getAllCauses(): Observable<Cause[]> {
        return this.http.get<Cause[]>('causes');
    }

    getCauseById(id: String): Observable<Cause> {
        return this.http.get<any>(`causes/${id}`);
    }

    getProfileCauses(): Observable<any[]> {
        return forkJoin([
            this.http.get<Cause[]>('causes'),
            this.http.get('auth')
        ]);
    }

    createCause(
        cause: {
            cause: string, neededAmount: number, description: string, imageUrl: string
        }) {

        return this.http.post<Cause>(`causes`, cause);
    }

    updateCauseNeededAmount(id: string, donatedAmount: { donatedAmount: number }) {
        return this.http.put<Cause>(`causes/${id}`, donatedAmount);
    }

}