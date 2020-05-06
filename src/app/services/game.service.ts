import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

import { Game, Response, ChartData } from '../interfaces/interfaces';

import { Observable, EMPTY, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games:Game[] = [];

  constructor(private http: HttpClient, private db:AngularFirestore) { }

  getGames(): Observable<Game[]>{
    if(this.games.length > 0){
      console.log('Desde caché');
      return of(this.games);
    } else {
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(
          catchError((err: HttpErrorResponse) => {
                  return throwError(err);

        }),
        tap( games => {
             console.log('Desde internet');
             this.games = games;
        })
      );
    }
  }

  voteGame(idx: string): Observable<Response>{
    return this.http.post<Response>(`${environment.url}/api/goty/${idx}`, {})
      .pipe(
        catchError((err: HttpErrorResponse) => {
          let defaultResponse:Response =  {ok : false, mensaje : err.message};
          return of(defaultResponse);
      }));
  }

  getVotes(): Observable<ChartData[]>{
    return this.db.collection('goty').valueChanges()
      .pipe(
        map( (resp: Game[]) => {
            return resp.map( game => {
              return { name : game.name, value: game.votes}
            });
        })
      );
  }

}
