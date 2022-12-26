import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';
import { RxjsObservablesComponent } from './rxjs-observables/rxjs-observables.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  {
    path: 'users', children: [
      { path: 'observables', component: RxjsObservablesComponent },
      { path: 'operators', component: OperatorsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
