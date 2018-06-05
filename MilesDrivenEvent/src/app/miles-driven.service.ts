import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Miles } from './models/miles';

@Injectable({
  providedIn: 'root'
})
export class MilesDrivenService {
  // private url = 'http://localhost:8080/api/days';
  private baseUrl = '/MilesDrivenREST/';
  private url = this.baseUrl + '/api/days';


  index() {
    return this.http.get<Miles[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }



  create(mile: Miles) {

    return this.http.post<Miles>(this.url, mile)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );

  }


  update(mile) {
    return this.http.put<Miles>(this.url + '/' + mile.id, mile)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM');
          })
        );
  }

  destroy(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
}
  constructor(private http: HttpClient) { }
}
