import { NewemployeeComponent } from './newemployee/newemployee.component';
import { DisplayComponent } from './display/display.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:DisplayComponent},
  {path:'modify',component:NewemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
