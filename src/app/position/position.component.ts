import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean;
  failMessage: boolean;

  constructor(
    private posService: PositionService,
    private actRoute: ActivatedRoute
  ) { 
    this.paramSubscription = "";
    this.positionSubscription = "";
    this.savePositionSubscription = "";
    this.position = new Position;
    this.successMessage = false;
    this.failMessage = false;
  }

  ngOnInit() {

    //Store the Subscription
    this.paramSubscription = this.actRoute.params.subscribe(params => {

      //Get and Store the id
      let id = params['_id'];

      //Using the id get the Position
      this.positionSubscription = this.posService.getPosition(id).subscribe(pos => {
        this.position = pos[0];
      });

    });

  }

  onSubmit() {
    //Save the Position
    this.savePositionSubscription = this.posService.savePosition(this.position).subscribe(() => {
      //Set the success message to true
      this.successMessage = true;

      //Set the successMessage to false if it timesout for more than 2500ms
      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    }),
    () => { //Second Callback 
      //Set the fail message to true
      this.failMessage = true;

      //Set the fail message to false if it timesout for more than 2500ms
      setTimeout(() => {
        this.failMessage = false;
      }, 2500);
    }
  }

  ngOnDestroy() {
    //Unsubscribe to all Subscriptions
    if (this.paramSubscription) { this.paramSubscription.unsubscribe(); }
    if (this.positionSubscription) { this.positionSubscription.unsubscribe(); }
    if (this.savePositionSubscription) { this.savePositionSubscription.unsubscribe(); }
  }

}
