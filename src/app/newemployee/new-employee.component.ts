import {Employee} from './employee-model';
import {EmployeeService} from '../employee.service';
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
             selector: 'app-newemployee',
             templateUrl: './new-employee.component.html',
             styleUrls: ['./new-employee.component.css']
           })
export class NewEmployeeComponent implements OnInit {
  employees: any = [];
  temp: any = [];
  len: any;

  constructor(public fb: FormBuilder, private router: Router, private employeeService: EmployeeService) {
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
    this.temp = this.employeeService.temp;
    this.len = Object.keys(this.temp).length;
    console.log(this.len);
    console.log(this.temp);
    this.fillForm();
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

  fillForm(): void {
    this.add.patchValue(
      {
        fname: this.temp.fname,
        lname: this.temp.lname,
        num: this.temp.num,
        dob: this.temp.dob,
        pan: this.temp.pan
      });
  }

  // updateEmployee(emp: Employee): void {
  //   // this.employeeService.selectRow(this.temp.id);
  //   this.employeeService.onupdate(emp);
  // }

  dataCapture(): void {
    this.employees = (this.add.value as Employee);
    if (this.temp !== undefined) {
      this.employeeService.onupdate(this.employees);
    } else {
      this.employeeService.addEmployee(this.employees);
    }

  }

  moveToDisplay(): void {
    this.router.navigate(['']);
    this.temp = null;
    this.employeeService.temp = undefined;
  }

  fillPatch(fill: any): void {
    console.log(fill);
  }


}
