import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PositionService = class PositionService {
    constructor(http) {
        this.http = http;
        //API Url
        this.url = 'https://radiant-waters-52080.herokuapp.com';
    }
    //Return all Positions
    getPositions() {
        return this.http.get(`${this.url}/positions`);
    }
};
PositionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PositionService);
export { PositionService };
//# sourceMappingURL=position.service.js.map