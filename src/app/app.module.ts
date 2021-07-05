 import {EmployeeService} from './employee.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewEmployeeComponent} from './newemployee/new-employee.component';
import {DisplayComponent} from './display/display.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
            declarations: [
              AppComponent,
              NewEmployeeComponent,
              DisplayComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
