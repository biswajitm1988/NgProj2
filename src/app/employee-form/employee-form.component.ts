import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../service/employees.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Gender } from '../models/gender.enum';
import { Designation } from '../models/designation.enum';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  emp:Employee;
  isNew:boolean;
  myDate:Date;
  genderEnum=Gender;
  designationEnum=Designation;
  
  constructor(private employeeService:EmployeesService, 
    private routeState:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    this.routeState.params.subscribe(params => {
      if(params["empId"]==null){
        this.isNew=true;
        this.emp=new Employee();
      }else{
        let empId=params["empId"];
        this.emp=this.employeeService.getEmployeeById(empId);
      }
    });
  }

  saveEmployee(){
    if(this.isNew){
      this.employeeService.addEmployee(this.emp)
    }else{
      this.employeeService.updateEmployee(this.emp);
    }
    this.router.navigate(["/employees"]);
  }

}
