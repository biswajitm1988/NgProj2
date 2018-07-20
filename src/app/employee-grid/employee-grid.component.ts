import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../service/employees.service';
import { Designation } from '../models/designation.enum';
import { Gender } from '../models/gender.enum';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent implements OnInit {

  emps:Employee[];

  constructor(private employeeService : EmployeesService) { }

  ngOnInit() {
    this.emps=this.employeeService.getAllEmployees();
  }

  getDesignation(id:number):string{
    return Designation[id];
  }
  getGender(id:number):string{
    return Gender[id].charAt(0);
  }
}
