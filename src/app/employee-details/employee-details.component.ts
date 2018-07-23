import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Employee } from '../models/employee';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService : EmployeesService,private routeState:ActivatedRoute) { }
  emp:Employee;
  ngOnInit() {
    this.routeState.params.subscribe(params => {
        let empId=params["empId"];
        this.emp=this.employeeService.getEmployeeById(empId);
      
    });
  }

}
