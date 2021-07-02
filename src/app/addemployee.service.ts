import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { employeeData } from './newemployee/employee-model';
@Injectable({
  providedIn: 'root'
})
export class AddemployeeService {

  constructor( private _http:HttpClient,private _router:Router){}

  employee: employeeData[] = [];

  addemp(employee: employeeData) {
    this.employee.push(employee);
  }

  getemp() {
    
  console.log(this.employee);
  return this.employee;
  }
  //private headers = new HttpHeaders().set('content-Type','application/json');


  // add(fname:string,lname:string,num:string,dob:string,pan:string){
  //   const authData: employeeData = { fname:fname,lname:lname,num: num, dob: dob,pan:pan };
  //   this._http
  //     .post("http://localhost:3000/api/add", authData)
  //     .subscribe(() => {
  //       console.log("raja");
  //       //this._router.navigate(["/login"]);
  //     }, error => {
  //       console.log("error");
  //     });
  // }

  // reademployee(){
  //   return this._http.get("http://localhost:3000/api/getemployee",{headers:this.headers});
  // }

}