import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestSubjectService {
  subject = new Subject<any>();
  behaviorSubject = new BehaviorSubject<any>(1);
  replaySubject = new ReplaySubject<any>(5);
  asyncSubject = new AsyncSubject<any>();

  constructor() {
    this.subject.next(1);
    this.behaviorSubject.next(1);
    this.replaySubject.next(1);
    this.asyncSubject.next(1);
    this.subject.next(2);
    this.behaviorSubject.next(2);
    this.replaySubject.next(2);
    this.asyncSubject.next(2);
   }

   subscribe(){
     this.subject.subscribe(x => {console.log('Subject called ' + x)});
     this.behaviorSubject.subscribe(x => {console.log('Behavior Subject called ' + x)});
     this.replaySubject.subscribe(x => {console.log('Replay Subject called ' + x)});
     this.asyncSubject.subscribe(x => {console.log('Async Subject called ' + x)});

    this.subject.next(3);
    this.behaviorSubject.next(3);
    this.replaySubject.next(3);
    this.asyncSubject.next(3);


   }

   getSubject(){
      return this.subject;
  }
}
