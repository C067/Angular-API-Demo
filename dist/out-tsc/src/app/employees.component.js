import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let EmployeesComponent = class EmployeesComponent {
    //Constructor
    constructor(empService) {
        this.empService = empService;
        this.employees = [];
        this.getEmployeesSub = "";
        this.loadingError = false;
    }
    ngOnInit() {
        //Store all employees and store a reference of the subscription
        this.getEmployeesSub = this.empService.getEmployees().subscribe(employees => {
            this.employees = employees;
        }),
            () => {
                //Set the loading error to true if there was an error returning the data
                this.loadingError = true;
            };
    }
    ngOnDestroy() {
        //Empty the saved subscription
        if (this.getEmployeesSub) {
            this.getEmployeesSub.unsubscribe();
        }
    }
};
EmployeesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-employees',
        templateUrl: './employees.component.html',
        styleUrls: ['./employees.component.css']
    })
], EmployeesComponent);
export { EmployeesComponent };
//# sourceMappingURL=employees.component.js.map