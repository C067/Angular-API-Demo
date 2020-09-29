import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from './data/position';
import { PositionService } from './data/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  //Properties
  positions : Position[];
  getPositionsSub : any;
  loadingError : boolean;

  //Constructor
  constructor(
    private posService : PositionService,
    private router: Router
  ) { 
    this.positions = [];
    this.getPositionsSub = "";
    this.loadingError = false;
  }

  ngOnInit() {
    //Store all Positions and store a reference of the subscription
    this.getPositionsSub = this.posService.getPositions().subscribe(positions => {
      this.positions = positions;
    }), 
    () => {
      //Set the loading error to true if there was an error returning the data
      this.loadingError = true;
    };
  }

  ngOnDestroy() {
    //Empty the saved subscription
    if (this.getPositionsSub) {
      this.getPositionsSub.unsubscribe();
    }
  }

  //Route to a specific Position
  routePosition(id: string) {
    this.router.navigate(['/position', id]);
  }

}
