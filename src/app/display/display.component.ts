import { employeeData } from './../newemployee/employee-model';
import { Component, OnInit } from '@angular/core';
import { AddemployeeService } from '../addemployee.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private _employeeService:AddemployeeService ) { }
   employee:any[]=[];
  ngOnInit(): void {
   this.employee = this._employeeService.getemp();
 
  }

}
