import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from './data/employee.service';
import { Employee } from './data/employee';
import { Router } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { filter } from 'minimatch';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  //Properties
  employees : Employee[];
  getEmployeesSub : any;
  loadingError : boolean;
  filteredEmployees: Employee[];


  //Constructor
  constructor(
    private empService : EmployeeService,
    private router: Router
  ) { 
    this.employees = [];
    this.getEmployeesSub = "";
    this.loadingError = false;
  }

  ngOnInit() {
    //Store all employees and store a reference of the subscription
    this.getEmployeesSub = this.empService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.filteredEmployees = employees;
    }), 
    () => {
      //Set the loading error to true if there was an error returning the data
      this.loadingError = true;
    }
  }

  ngOnDestroy() {
    //Empty the saved subscription
    if (this.getEmployeesSub) {
      this.getEmployeesSub.unsubscribe();
    }
  }

  routeEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUP(event: any) {
    let filterString: string = event.target.value.toLowerCase();

    this.filteredEmployees = this.employees.filter(employee => {
      return ( (employee.FirstName.toLowerCase().indexOf(filterString) !== -1) || (employee.LastName.toLowerCase().indexOf(filterString) !== -1) )
              || (employee.Position.PositionName.toLowerCase().indexOf(filterString) !== -1) ;
    });
  }

}
