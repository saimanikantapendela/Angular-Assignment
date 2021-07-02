import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Employee} from './newemployee/employee-model';

@Injectable({
              providedIn: 'root'
            })
export class EmployeeService {

  selectedRow = -1;
  employees: Employee[] = [];

  constructor(private http: HttpClient, private router: Router) {
  }


  addEmployee(employee: Employee): Employee {
    this.employees.push(employee);
    this.employees.forEach((e, i) => e.id = i);
    this.router.navigate(['/']).then();
    this.selectedRow = -1;
    return employee;
  }

  selectRow(idx: number): number {
    this.selectedRow = idx;
    return this.selectedRow;
  }

  getEmployees(): Employee[] {
    console.log(this.employees);
    return this.employees;
  }

  deleteEmployee(): Employee[] {
    if (this.selectedRow < 0 || this.selectedRow >= this.employees.length) {
      alert('Select a row to delete');
      return this.employees;
    }
    const consent: boolean = confirm('Are you sure to delete the selected Employee?');
    if (!consent) {
      return this.employees;
    }
    const employees: Employee[] = this.employees.filter((x, idx) => idx !== this.selectedRow);
    employees.forEach((e, i) => e.id = i);
    this.employees = employees;
    this.selectedRow = -1;
    return employees;
  }

  updateEmployee(employee: Employee): Employee[] {
    this.employees[this.selectedRow] = employee;
    this.employees.forEach((e, i) => e.id = i);
    this.router.navigate(['/']).then();
    this.selectedRow = -1;
    return this.employees;
  }
}
