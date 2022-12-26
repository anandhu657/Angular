import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-observables',
  templateUrl: './rxjs-observables.component.html',
  styleUrls: ['./rxjs-observables.component.css']
})
export class RxjsObservablesComponent implements OnInit {
  agents!: Observable<string>;
  data!: string;

  ngOnInit(): void {
    this.agents = new Observable(
      function (observer) {
        try {
          // observer.next("Anandhu");
          // observer.next("nothing");

          setInterval(() => {
            observer.next("Hai")
          }, 3000);

          setInterval(() => {
            observer.next("Guys")
          }, 5000)
        } catch (e) {
          observer.error(e);
        }
      }
    )

    this.agents.subscribe(data => {
      this.data = data;
    })
  }

}
