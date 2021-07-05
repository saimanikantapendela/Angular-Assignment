import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Employee} from './newemployee/employee-model';
import {Observable, Subject} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class EmployeeService {

  selectedRow = -1;
  employees: Employee[] = [];
  temp: Employee | undefined;
  copied = new Subject<boolean>();

  getAuthStatusListener(): Observable<boolean> {
    return this.copied.asObservable();
  }

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

  onupdate(emp: Employee): Employee[] {
    emp.id = this.selectedRow;
    this.employees[this.selectedRow] = emp;
    this.selectedRow = -1;
    this.temp = undefined;
    this.router.navigate(['/']);
    return this.employees;
  }

  updateEmployee(): Promise<Employee[]> {
    if (this.selectedRow < 0 || this.selectedRow >= this.employees.length) {
      alert('Select a row to update');
      return Promise.resolve(this.employees);
    }
    this.temp = this.employees[this.selectedRow];
    return this.router.navigate(['/modify']).then(
      () => {
        return this.employees;
      }
    );
  }

  fillForm(): Employee {
    return this.temp as Employee;
  }

}
