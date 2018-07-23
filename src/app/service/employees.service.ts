import { Injectable } from '@angular/core';
import { Gender } from '../models/gender.enum';
import { Designation } from '../models/designation.enum';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  emps:Employee[];
  constructor() {
    this.emps=[
      {empId:1,name:"Biswajit",gender:Gender.MALE,doj:new Date("25-Nov-10"),designation:Designation.Associate,salary:50000,isBillable:true, experience:0},
      {empId:2,name:"Employee2",gender:Gender.MALE,doj:new Date("10-Nov-10"),designation:Designation.Associate,salary:50000,isBillable:false, experience:0},
      {empId:3,name:"Employee3",gender:Gender.MALE,doj:new Date("17-Jul-15"),designation:Designation.SeniorAssociate,salary:80000,isBillable:true, experience:0},
      {empId:4,name:"Employee4",gender:Gender.FEMALE,doj:new Date("17-Jul-15"),designation:Designation.Manager,salary:120000,isBillable:true, experience:0},
    ];
   }

   computeExperience(doj:Date) : number{
     let exp = 0;
     let today=new Date();
     exp = Math.abs(today.getFullYear()-(new Date(doj)).getFullYear());
     return exp;
   }

   getAllEmployees():Employee[]{
     this.emps.forEach(emp => {
       emp.experience=this.computeExperience(emp.doj);
     });
     return this.emps;
   }

   getEmployeeById(empid:number):Employee{
     let emp:Employee;
     emp = this.emps.find(e => e.empId==empid);
     return emp;
   }

   addEmployee(emp:Employee):Employee{
     this.emps.push(emp);
     return emp;
  }

   updateEmployee(emp:Employee):Employee{
     let empIndex=this.emps.findIndex(e => e.empId==emp.empId);
     this.emps[empIndex]=emp;
    return emp;
   }

   deleteEmployee(emp:Employee):boolean{
    let empIndex=this.emps.findIndex(e => e.empId==emp.empId);
     this.emps.splice(empIndex,1);
    return true;
   }
}
