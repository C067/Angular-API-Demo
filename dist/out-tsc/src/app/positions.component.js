import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PositionsComponent = class PositionsComponent {
    //Constructor
    constructor(posService) {
        this.posService = posService;
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
};
PositionsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-positions',
        templateUrl: './positions.component.html',
        styleUrls: ['./positions.component.css']
    })
], PositionsComponent);
export { PositionsComponent };
//# sourceMappingURL=positions.component.js.map