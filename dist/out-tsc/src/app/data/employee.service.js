import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        //API Url
        this.url = 'https://radiant-waters-52080.herokuapp.com';
    }
    //Get all Employees
    getEmployees() {
        return this.http.get(`${this.url}/employees`);
    }
};
EmployeeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], EmployeeService);
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map