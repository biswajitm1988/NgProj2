import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesService } from './service/employees.service';

const pathMappings : Routes = [
  {path:'',component:WelcomeComponent},
  {path:'employees',component:EmployeeGridComponent},
  {path:'addEmployee',component:EmployeeFormComponent},
  {path:'editEmployee/:empId',component:EmployeeFormComponent},
  {path:'viewEmployee',component:EmployeeDetailsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    EmployeeGridComponent,
    EmployeeFormComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(pathMappings)
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
