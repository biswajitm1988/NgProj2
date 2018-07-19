import { Gender } from "./gender.enum";
import { Designation } from "./designation.enum";

export class Employee {
    public empId:number;
    public name:string;
    public gender:Gender;
    public doj:Date;
    public designation:Designation;
    public salary:number;
    public experience:number;
    public isBillable:boolean;
}
