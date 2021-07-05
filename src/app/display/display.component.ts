import {Employee} from '../newemployee/employee-model';
import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
             selector: 'app-display',
             templateUrl: './display.component.html',
             styleUrls: ['./display.component.css']
           })
export class DisplayComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  employee: Employee[] = [];
  selectedRow = -1;

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployees();
  }

  selectRow(id: number): void {
    this.selectedRow = this.employeeService.selectRow(id);
  }

  deleteEmployee(): void {
    this.employee = this.employeeService.deleteEmployee();
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee().then(
      emp => {
        this.employee = emp;
      }
    );
  }

}
