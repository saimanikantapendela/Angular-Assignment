import {Employee} from './employee-model';
import {EmployeeService} from '../employee.service';
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
             selector: 'app-newemployee',
             templateUrl: './newemployee.component.html',
             styleUrls: ['./newemployee.component.css']
           })
export class NewemployeeComponent implements OnInit {
  employees: any = [];

  constructor(public fb: FormBuilder, private router: Router, private _employeeService: EmployeeService) {
  }

  add!: FormGroup;

  ngOnInit(): void {
    this.add = this.fb.group(
      {
        fname: new FormControl('', [
          Validators.required,
        ]),
        lname: new FormControl('', [
          Validators.required,
        ]),

        num: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]),
        dob: new FormControl('', [
          Validators.required,
        ]),
        pan: new FormControl('', [
          Validators.required,
          Validators.maxLength(9)
        ]),
      });

  }

  get fname(): AbstractControl {
    return this.add.controls.fname;
  }

  get lname(): AbstractControl {
    return this.add.controls.lname;
  }

  get num(): AbstractControl {
    return this.add.controls.num;
  }

  get dob(): AbstractControl {
    return this.add.controls.dob;
  }

  get pan(): AbstractControl {
    return this.add.controls.pan;
  }


  dataCapture(): void {
    this.employees = (this.add.value as Employee);
    this._employeeService.addEmployee(this.employees);
    // this._employeeService.getEmployees();
  }

  moveToDisplay(): void {
    this.router.navigate(['']);
  }


}
