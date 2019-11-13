import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { filter, take, map, retry, catchError } from 'rxjs/operators';
import { of, from, range, interval, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxService {

  constructor() { }

  getObservable() : Observable<any>{
    return Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.error('first error');
      observer.error('second error');
      observer.complete();
    });
  }

  callObservable(){
    this.getObservable().subscribe(
      data => {console.log(data)},
      (error : Error) => {console.log(error)},
      () => {console.log('finished')}
    );
  }

  testFilter(){
    return range(1, 5).pipe(
      filter(value => value > 2)
    );
  }

  testMap(){
    return interval(1000).pipe(
      take(10), map(val => '_myMap' + val)
    );
  }

  testCatchRetry(){
    return this.getObservable().pipe(
      retry(2),
      catchError(err => {
        console.log('catch error');
        if(err == 'error'){
          return of('Default value')
        } else {
          return throwError(err);
        }
      })
    );
  }
}
