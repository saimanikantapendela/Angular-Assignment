import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Employee} from './newemployee/employee-model';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
              providedIn: 'root'
            })
export class EmployeeService {

  selectedRow = -1;
  employees: Employee[] = [];
  temp: Employee | undefined;
  updateFlow = false;
  copied = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {

  }

  addEmployee(employee: Employee): Employee {
    this.postEmployee(employee);
    this.router.navigate(['/']).then();
    this.selectedRow = -1;
    return employee;
  }

  selectRow(idx: number): number {
    this.selectedRow = idx;
    this.http.get<Employee>('http://localhost:3000/employees/' + idx).subscribe((x) => {
      this.temp = x;
    });
    return this.selectedRow;
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }

  deleteEmployee(): void {
    if (this.selectedRow < 0) {
      alert('Select a row to delete');
      return;
    }
    const consent: boolean = confirm('Are you sure to delete the selected Employee?');
    if (!consent) {
      return;
    }
    this.deleteEmployeeApi(this.selectedRow).subscribe(() => {
      this.selectedRow = -1;
    });
    return;
  }

  onupdate(emp: Employee): Observable<Employee[]> {
    this.updateEmployeeApi(emp, this.selectedRow).subscribe(
      () => {
        this.selectedRow = -1;
        this.temp = undefined;
        this.router.navigate(['/']);
      }
    );
    this.updateFlow = false;
    return this.getEmployees();
  }

  updateEmployee(): Promise<Employee[]> {
    if (this.selectedRow < 0) {
      alert('Select a row to update');
      return Promise.resolve(this.employees);
    }
    this.updateFlow = true;
    return this.router.navigate(['/modify']).then(
      () => {
        return this.employees;
      }
    );
  }

  postEmployee(employee: Employee): Promise<Employee> {
    return this.http.post<any>('http://localhost:3000/employees', employee)
      .pipe(map((res: Employee) => {
        return res;
      })).toPromise();
  }

  updateEmployeeApi(employee: Employee, id: number): Observable<any> {
    return this.http.put<any>('http://localhost:3000/employees/' + id, employee)
      .pipe(map((res) => {
        return res;
      }));
  }

  deleteEmployeeApi(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/employees/' + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }


}

