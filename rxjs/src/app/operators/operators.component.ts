import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  ofData: Observable<string[]> = of(["a", "b", "c"]);
  ofDataString: Observable<string> = of("anandhu");

  fromData: Observable<string> = from(['a', 'b', 'c']);


  // fromEvent
  @ViewChild('validate')
  buttonValidate!: ElementRef;

  ngOnInit(): void {
    // of operator
    console.log("of operator");

    this.ofData.subscribe(val => {
      console.log(val);
    })

    this.ofDataString.subscribe(val => {
      console.log(val);
    })

    // from operator
    console.log("from operator");

    this.fromData.subscribe(val => {
      console.log(val);
    })

    // interval operator
    this.fromData.subscribe(val => {
      const intervalSequence$ = interval(5000);

      intervalSequence$.subscribe(num => {
        if (num < 5)
          console.log(val + num);
      })
    })
  }

  fromEventOperator() {
    console.log("From event");
    const fromEvent$ = fromEvent(this.buttonValidate.nativeElement, 'click');

    fromEvent$.subscribe(val => {
      console.log(val);
    })
  }
}
