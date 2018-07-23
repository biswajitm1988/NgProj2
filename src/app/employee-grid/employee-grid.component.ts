import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../service/employees.service';
import { Designation } from '../models/designation.enum';
import { Gender } from '../models/gender.enum';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent implements OnInit {

  emps:Employee[];

  constructor(private employeeService : EmployeesService, private router:Router ) { }

  ngOnInit() {
    this.emps=this.employeeService.getAllEmployees();
  }

  deleteEmployee(emp:Employee){
    if(confirm("Are you sure you want to remove this employee details?")){
      this.employeeService.deleteEmployee(emp);
      this.router.navigate(["/employees"]);
    }
  }

  getDesignation(id:number):string{
    return Designation[id];
  }
  getGender(id:number):string{
    return Gender[id].charAt(0);
  }
}
