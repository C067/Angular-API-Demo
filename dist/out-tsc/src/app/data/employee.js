import { Position } from "./position";
export class Employee {
    constructor() {
        this._id = "";
        this.FirstName = "";
        this.LastName = "";
        this.AddressStreet = "";
        this.AddressState = "";
        this.AddressCity = "";
        this.AddressZip = "";
        this.PhoneNum = "";
        this.Extension = 0;
        this.Position = new Position();
        this.HireDate = "";
        this.SalaryBonus = 0;
        this.__v = 0;
    }
}
//# sourceMappingURL=employee.js.map