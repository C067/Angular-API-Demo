import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee';
import { EmployeeRaw } from './employeeRaw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //API Url
  private url = 'https://radiant-waters-52080.herokuapp.com';

  constructor(private http: HttpClient) { }

  //Get all Employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  //Save the Employee
  saveEmployee(employee: EmployeeRaw): Observable<any> {
    return this.http.put<any>(`${this.url}/employee/` + employee._id, employee);
  }

  //Get Employee
  getEmployee(id: number): Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>(`${this.url}/employee/` + id);
  }

}
