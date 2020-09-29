import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeRaw } from '../data/employeeRaw';
import { Position } from '../data/position';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionSubscription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean;
  failMessage: boolean;

  constructor( 
    private empService: EmployeeService,
    private posService: PositionService,
    private actRoute: ActivatedRoute
  ) { 
    this.paramSubscription = "";
    this.employeeSubscription = "";
    this.getPositionSubscription = "";
    this.saveEmployeeSubscription = "";
    this.employee = new EmployeeRaw;
    this.positions = [];
    this.successMessage = false;
    this.failMessage = false;
  }

  ngOnInit() {

    //Get and Store the subscripiton into paramSubscription
    this.paramSubscription = this.actRoute.params.subscribe(parms => {

      //Store the id
      let _id = parms['_id'];

      //Using the _id get the Employee
      this.employeeSubscription = this.empService.getEmployee(_id).subscribe(emp => {
        this.employee = emp[0];
      });

    });

    //Get all Postions
    this.getPositionSubscription = this.posService.getPositions().subscribe(pos => {
      this.positions = pos;
    });

  }

  onSubmit() {
    this.saveEmployeeSubscription = this.empService.saveEmployee(this.employee).subscribe(() => {
      //Set the Success Message to true
      this.successMessage = true;

      //Set the successMessage to false if it timesout for more than 2500ms
      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    }),     
    () => { //Second Callback
      this.failMessage = true;

      //Set the failMessage to false if it timesout for more than 2500ms
      setTimeout(() => {
        this.failMessage = false;
      }, 2500);
    }
  }

  ngOnDestroy() {
    //Unsubscribe to all Subscriptions
    if (this.paramSubscription) { this.paramSubscription.unsubscribe(); }
    if (this.employeeSubscription) { this.employeeSubscription.unsubscribe(); }
    if (this.getPositionSubscription) { this.getPositionSubscription.unsubscribe(); }
    if (this.saveEmployeeSubscription) { this.saveEmployeeSubscription.unsubscribe(); }
  }

}
