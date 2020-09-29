import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Position } from './position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  //API Url
  private url = 'https://radiant-waters-52080.herokuapp.com';

  constructor(private http: HttpClient) { }

  //Return all Positions
  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/positions`);
  }

  //Save the Position
  savePosition(position: Position): Observable<any> {
    return this.http.put<any>(`${this.url}/position/` + position._id, position);
  }

  //Get Position
  getPosition(id: number): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/position/` + id);
  }

}
