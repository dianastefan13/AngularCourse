import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RxService } from 'src/app/services/rx.service';
import { of, from, range, interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.css']
})
export class RxTestComponent implements OnInit {

  constructor(private rxService: RxService) {
    // rxService.callObservable();
    //this.obsCreationHelpers();
   }

   @ViewChild("myButton", {static: true})
   myButton: ElementRef

  ngOnInit() {
    this.obsCreationHelpers();
  }

  obsCreationHelpers(){
    // of(1, 2, 3, 4).subscribe(x => console.log(x));
    // from([5, 6, 7, 8]).subscribe(x => console.log(x));
    // from(of('inception')).subscribe(x => console.log(x));
    // from(Promise.resolve('promise')).subscribe(x => console.log(x));
    //range(1, 5).subscribe(x => console.log('range_' + x));
    //interval(1000).subscribe(x => console.log('interval_' + x));
    //fromEvent(this.myButton.nativeElement, 'click').subscribe(click => console.log('my click_' + click));

    //of('inception').toPromise().then(() => console.log('my promise is here'));

    //this.rxService.testFilter().subscribe(x => console.log('map_' + x));

    //this.rxService.testMap().subscribe(x => console.log(x));

    this.rxService.testCatchRetry().subscribe(x => console.log(x));

    
  }

}
