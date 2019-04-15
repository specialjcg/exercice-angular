import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Session } from './src/app/admin/session';
//import { Http } from '@angular/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'https://gmuxbbpvrb.execute-api.eu-west-3.amazonaws.com/dev/sessions/';
@Injectable()
export class SessionHttpService {
  constructor( private httpclient: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getSession(id: string): Observable<any> {
    const url = `${apiUrl}`;
    return this.httpclient.get(url + id, httpOptions).pipe(
      map(this.extractData));
  }

  getSessionsObservable(): Observable<any> {
    const url = `${apiUrl}`;
    return this.httpclient.get(url, httpOptions)
      .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de session
    // .subscribe();
  }

  addSession(session): Observable<any> {
    const url = `${apiUrl}`;
    console.log(session);
    return this.httpclient.post(url, session, httpOptions)
      .pipe();
  }

  deleteSession(session): Observable<any> {
    const url = `${apiUrl}`;
    return this.httpclient.delete(url + session._id, httpOptions)
      .pipe(map(this.extractData));
  }
  updateSession(id, session): Observable<any> {
// tslint:disable-next-line: semicolon
    console.log('update session ' + id)
    const url = `${apiUrl}`;
    return this.httpclient.put(url + id, session, httpOptions)
      .pipe(map(this.extractData));
  }
}
