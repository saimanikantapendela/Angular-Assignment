import {NewEmployeeComponent} from './newemployee/new-employee.component';
import {DisplayComponent} from './display/display.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: DisplayComponent},
  {path: 'modify', component: NewEmployeeComponent}
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule { }
