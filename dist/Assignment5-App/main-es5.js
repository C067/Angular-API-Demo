(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!--Nav-Bar-->\n<app-nav></app-nav>\n<!--Content-->\n<app-content></app-content>\n<!--Footer-->\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--color-border-->\n<div class=\"color-border\"> </div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet> \n</div>\n\n<!--color-border-->\n<div class=\"color-border\"> </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"center\">\n    <h2>Employee: {{employee.FirstName}} {{employee.LastName}}</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n    </p>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form #f='ngForm' (ngSubmit)=\"onSubmit(f)\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\" [class.has-error]=\"FirstName.errors\">\n                            <label class=\"control-label\" for=\"FirstName\">First Name:</label>\n                            <input #FirstName=\"ngModel\" class=\"form-control\" id=\"FirstName\" type=\"text\" name=\"FirstName\" [(ngModel)]=\"employee.FirstName\" placeholder=\"FirstName\" required autofocus/>\n                            <span class=\"help-block\" *ngIf=\"FirstName.errors && FirstName.errors.required\">First Name is Required</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\" [class.has-error]=\"LastName.errors\">\n                            <label class=\"control-label\" for=\"LastName\">Last Name:</label>\n                            <input #LastName=\"ngModel\" class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" [(ngModel)]=\"employee.LastName\" placeholder=\"LastName\" required autofocus/>\n                            <span class=\"help-block\" *ngIf=\"LastName.errors && LastName.errors.required\">Last Name is Required</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"Position\">Position:</label>\n                            <select class=\"form-control\" id=\"Position\" name=\"Position\" [(ngModel)]=\"employee.Position._id\">\n                                <option *ngFor=\"let pos of positions\" [value]=\"pos._id\">{{pos.PositionName}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\" [class.has-error]=\"SalaryBonus.errors\">\n                            <label class=\"control-label\" for=\"SalaryBonus\">Salary Bonus</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">$</span>\n                                <input #SalaryBonus=\"ngModel\" class=\"form-control\" id=\"SalaryBonus\" type=\"number\" name=\"SalaryBonus\" [(ngModel)]=\"employee.SalaryBonus\" placeholder=\"0\" required autofocus/>\n                            </div>\n                            <span class=\"help-block\" *ngIf=\"SalaryBonus.errors && SalaryBonus.errors.required\">Salary Bonus is Required</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\" [class.has-error]=\"AddressStreet.errors\">\n                            <label class=\"control-label\" for=\"AddressStreet\">Address (Street):</label>\n                            <input #AddressStreet=\"ngModel\" class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" [(ngModel)]=\"employee.AddressStreet\" placeholder=\"123 John Street\" required autofocus/>\n                            <span class=\"help-block\" *ngIf=\"AddressStreet.errors && AddressStreet.errors.required\">Address (Street) is Required</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\" [class.has-error]=\"AddressCity.errors\">\n                            <label class=\"control-label\" for=\"AddressCity\">Address (City):</label>\n                            <input #AddressCity=\"ngModel\" class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" [(ngModel)]=\"employee.AddressCity\" placeholder=\"Santa Monica\" required/>\n                            <span class=\"help-block\" *ngIf=\"AddressCity.errors && AddressCity.errors.required\">Address (City) is Required</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\" [class.has-error]=\"AddressState.errors\">\n                            <label class=\"control-label\" for=\"AddressState\">Address (State):</label>\n                            <input #AddressState=\"ngModel\" class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" [(ngModel)]=\"employee.AddressState\" placeholder=\"CA\" required autofocus/>\n                            <span class=\"help-block\" *ngIf=\"AddressState.errors && AddressState.errors.required\">Address (State) is Required</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\" [class.has-error]=\"AddressZip.errors\">\n                            <label class=\"control-label\" for=\"AddressZip\">Address (Zip Code):</label>\n                            <input #AddressZip=\"ngModel\" class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" [(ngModel)]=\"employee.AddressZip\" placeholder=\"90410\" required autofocus/>\n                            <span class=\"help-block\" *ngIf=\"AddressZip.errors && AddressZip.errors.required\">Address (Zip) is Required</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\" [class.has-error]=\"PhoneNum.errors\">\n                            <label class=\"control-label\" for=\"PhoneNum\">Phone Number:</label>\n                            <input #PhoneNum=\"ngModel\" class=\"form-control\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" placeholder=\"0-(000)000-0000\" [(ngModel)]=\"employee.PhoneNum\" required autofocus pattern=\"\\+?[ ]*[1-9]?[ ]*-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\"/>\n                            <span class=\"help-block\" *ngIf=\"PhoneNum.errors && PhoneNum.errors.required\">Phone Number is Required</span>\n                            <span class=\"help-block\" *ngIf=\"PhoneNum.errors && PhoneNum.errors.pattern\">Phone Number must Match Required Pattern</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\" [class.has-error]=\"Extension.errors\">\n                            <label class=\"control-label\" for=\"Extension\">Extension:</label>\n                            <input #Extension=\"ngModel\" class=\"form-control\" id=\"Extension\" type=\"number\" name=\"Extension\" [(ngModel)]=\"employee.Extension\" placeholder=\"0\" required autofocus/>\n                            <span class=\"help-block\" *ngIf=\"Extension.errors && Extension.errors.required\">Extension is Required</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"HireDate\">Hire Date:</label>\n                            <input #HireDate class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" [value]=\"employee.HireDate | date:'longDate'\"\n                                readonly />\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n                <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" />\n                <br />\n                <br />\n            </form>\n        </div>\n    </div>\n    <br />\n    <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n        <strong>Success!</strong> {{employee.FirstName}} {{employee.LastName}}'s information was successfully saved.\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n        <strong>Error!</strong> {{employee.FirstName}} {{employee.LastName}}'s information could not be saved.\n    </div>\n</div>\n<br /><br />");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!--Title-->\n<div class=\"center\">\n    <h2>Employees</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<!--Table showing the Data-->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search Employees by Full Name or Position\" \n                    (keyup)=\"onEmployeeSearchKeyUP($event)\"/>\n            <br />\n            <div class=\"table-responsive\" *ngIf=\"!loadingError; else elseBlock\">\n                <table class=\"table table-condensed table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Full Name</th>\n                            <th>Address</th>\n                            <th>Phone Number</th>\n                            <th>Hire Date</th>\n                        </tr>\n                    </thead>                    \n                    <tbody>\n                        <tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\">\n                            <td>{{employee.FirstName}} {{employee.LastName}}</td>\n                            <td>{{employee.AddressStreet}}. {{employee.AddressState}}, {{employee.AddressCity}}. {{employee.AddressZip}}</td>\n                            <td>{{employee.PhoneNum}} ext: {{employee.Extension}}</td>\n                            <td>{{employee.HireDate | date:'longDate'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Error Block if there was an error loading the data-->\n<ng-template #elseBlock>\n    <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n            <thead>\n                <tr>\n                    <th>Full Name</th>\n                    <th>Address</th>\n                    <th>Phone Number</th>\n                    <th>Hire Date</th>\n                </tr>\n            </thead>\n        </table>\n        <div class=\"alert alert-danger text-center\">\n            <strong>Error occurred when trying to receive the data. Please try again.</strong>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer.component.html": 
        /*!*****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer.component.html ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--footer-->\n<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2019 Callum Dodge (WEB422). Design by <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--/#footer--> ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"main-slider\" class=\"no-margin\">\n    <div class=\"carousel slide\">\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n            <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n            <div class=\"item active\" style=\"background-image: url(assets/images/slider/bg1.jpg)\">\n                <div class=\"container\">\n                    <div class=\"row slide-margin\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"carousel-content\">\n                                <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-gamepad\"></i> API Demo</span></h1>\n                                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh\n                                    euismod tincidunt laoreet</h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--/.item-->\n\n            <div class=\"item\" style=\"background-image: url(assets/images/slider/bg2.jpg)\">\n                <div class=\"container\">\n                    <div class=\"row slide-margin\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"carousel-content\">\n                                <h1>Typi non habent claritatem insitam</h1>\n                                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh\n                                    euismod tincidunt laoreet</h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--/.item-->\n\n            <div class=\"item\" style=\"background-image: url(assets/images/slider/bg3.jpg)\">\n                <div class=\"container\">\n                    <div class=\"row slide-margin\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"carousel-content\">\n                                <h1>Mirum est notare quam littera gothica</h1>\n                                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh\n                                    euismod tincidunt laoreet</h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--/.item-->\n        </div>\n        <!--/.carousel-inner-->\n    </div>\n    <!--/.carousel-->\n    <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a\n        class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a>\n</section>\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<section id=\"feature\">\n    <div class=\"container\">\n        <div class=\"center\">\n            <h2>Featured Services</h2>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique\n                bibendum. Nunc quis semper sem.<br>\n                Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"features\">\n                <div class=\"col-md-6 col-sm-6\">\n                    <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\"></i>\n                        <h2>Employees</h2>\n                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.\n                        </h3>\n                    </div>\n                </div>\n                <!--/.col-md-6-->\n\n                <div class=\"col-md-6 col-sm-6\">\n                    <div class=\"feature-wrap\"> <i class=\"fa fa-cogs\"></i>\n                        <h2>Positions</h2>\n                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.\n                        </h3>\n                    </div>\n                </div>\n                <!--/.col-md-6-->\n            </div>\n            <!--/.services-->\n        </div>\n        <!--/.row-->\n    </div>\n    <!--/.container-->\n</section>\n<!--/#feature-->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--header-->\n<header id=\"header\">\n  \n  <!--navbar-->\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <!--container-->\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n        <a class=\"navbar-brand\" href=\"index.html\"><i class=\"fa fa-gamepad\"></i> Callum Dodge (API Demo)</a></div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container--> \n  </nav>\n  <!--/nav--> \n  \n</header>\n<!--/header-->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found.component.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div id=\"notfound\"> <!-- This templates was made by Colorlib (https://colorlib.com) -->\n\t\t\t\t<div class=\"notfound\">\n\t\t\t\t\t<div class=\"notfound-404\">\n\t\t\t\t\t\t<h1>4<span></span>4</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h2>Oops! Page Not Found</h2>\n\t\t\t\t\t<p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/position/position.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/position/position.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">\n    <h2>Position: {{position.PositionName}}</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n    </p>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group has-error\" [class.has-error]=\"PositionName.errors\">\n                            <label class=\"control-label\" for=\"PositionName\">Position Name:</label>\n                            <input #PositionName=\"ngModel\" class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" [(ngModel)]=\"position.PositionName\" placeholder=\"PositionName\" autofocus required/>\n                            <span class=\"help-block\" *ngIf=\"PositionName.errors && PositionName.errors.required\">Position Name is Required</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\" [class.has-error]=\"PositionDescription.errors\">\n                            <label class=\"control-label\" for=\"PositionDescription\">Description:</label>\n                            <textarea #PositionDescription=\"ngModel\" class=\"form-control\" id=\"PositionDescription\" rows=\"5\"\n                                name=\"PositionDescription\" [(ngModel)]=\"position.PositionDescription\" required autofocus></textarea>\n                            <span class=\"help-block\" *ngIf=\"PositionDescription.errors && PositionDescription.errors.required\">Position Description is Required</span>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n                <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" />\n                <br />\n                <br />\n            </form>\n        </div>\n    </div>\n    <br />\n    <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n        <strong>Success!</strong> Position: \"{{position.PositionName}}\" was successfully saved.\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n        <strong>Error!</strong> Position: \"{{position.PositionName}}\" could not be saved.\n    </div>\n</div>\n<br /><br />");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/positions.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/positions.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!--Title-->\n<div class=\"center\">\n    <h2>Positions</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<!--Table showing the Data-->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\" *ngIf=\"!loadingError; else elseBlock\">\n                <table class=\"table table-condensed table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Position Title</th>\n                            <th>Position Description</th>\n                            <th>Salary</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let position of positions' (click)=\"routePosition(position._id)\">\n                            <td>{{position.PositionName}}</td>\n                            <td>{{position.PositionDescription}}</td>\n                            <td>${{position.PositionBaseSalary | number:'0.2'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Error Block if there was an error loading the data-->\n<ng-template #elseBlock>\n    <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n            <thead>\n                <tr>\n                    <th>Full Name</th>\n                    <th>Address</th>\n                    <th>Phone Number</th>\n                    <th>Hire Date</th>\n                </tr>\n            </thead>\n        </table>\n        <div class=\"alert alert-danger text-center\">\n            <strong>Error occurred when trying to receive the data. Please try again.</strong>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
            /* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
            /* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
            /* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
            /* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
            /* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
            //Components
            var routes = [
                { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'employees', component: _employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"] },
                { path: 'positions', component: _positions_component__WEBPACK_IMPORTED_MODULE_5__["PositionsComponent"] },
                { path: 'employee/:_id', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
                { path: 'position/:_id', component: _position_position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"] },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**********************************************************************************
             * WEB422 – Assignment 05
             * I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
             * assignment has been copied manually or electronically from any other source (including web sites) or
             * distributed to other students.
             *
             * Name: Callum Dodge     Student ID: 100229178     Date: Nov 5, 2019
             **********************************************************************************/
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Assignment5-App';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
            /* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content.component */ "./src/app/content.component.ts");
            /* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer.component.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
            /* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
            /* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
            /* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
            /* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
            /* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                        _content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                        _footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                        _home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _employees_component__WEBPACK_IMPORTED_MODULE_11__["EmployeesComponent"],
                        _positions_component__WEBPACK_IMPORTED_MODULE_12__["PositionsComponent"],
                        _page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                        _employee_employee_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeComponent"],
                        _position_position_component__WEBPACK_IMPORTED_MODULE_15__["PositionComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/content.component.css": 
        /*!***************************************!*\
          !*** ./src/app/content.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/content.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/content.component.ts ***!
          \**************************************/
        /*! exports provided: ContentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function () { return ContentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContentComponent = /** @class */ (function () {
                function ContentComponent() {
                }
                ContentComponent.prototype.ngOnInit = function () {
                };
                return ContentComponent;
            }());
            ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-content',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.css */ "./src/app/content.component.css")).default]
                })
            ], ContentComponent);
            /***/ 
        }),
        /***/ "./src/app/data/employee.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/data/employee.service.ts ***!
          \******************************************/
        /*! exports provided: EmployeeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function () { return EmployeeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var EmployeeService = /** @class */ (function () {
                function EmployeeService(http) {
                    this.http = http;
                    //API Url
                    this.url = 'https://radiant-waters-52080.herokuapp.com';
                }
                //Get all Employees
                EmployeeService.prototype.getEmployees = function () {
                    return this.http.get(this.url + "/employees");
                };
                //Save the Employee
                EmployeeService.prototype.saveEmployee = function (employee) {
                    return this.http.put(this.url + "/employee/" + employee._id, employee);
                };
                //Get Employee
                EmployeeService.prototype.getEmployee = function (id) {
                    return this.http.get(this.url + "/employee/" + id);
                };
                return EmployeeService;
            }());
            EmployeeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmployeeService);
            /***/ 
        }),
        /***/ "./src/app/data/employeeRaw.ts": 
        /*!*************************************!*\
          !*** ./src/app/data/employeeRaw.ts ***!
          \*************************************/
        /*! exports provided: EmployeeRaw */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRaw", function () { return EmployeeRaw; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EmployeeRaw = /** @class */ (function () {
                function EmployeeRaw() {
                    this._id = "";
                    this.FirstName = "";
                    this.LastName = "";
                    this.AddressStreet = "";
                    this.AddressState = "";
                    this.AddressCity = "";
                    this.AddressZip = "";
                    this.PhoneNum = "";
                    this.Extension = 0;
                    this.Position = "";
                    this.HireDate = "";
                    this.SalaryBonus = 0;
                    this.__v = 0;
                }
                return EmployeeRaw;
            }());
            /***/ 
        }),
        /***/ "./src/app/data/position.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/data/position.service.ts ***!
          \******************************************/
        /*! exports provided: PositionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function () { return PositionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PositionService = /** @class */ (function () {
                function PositionService(http) {
                    this.http = http;
                    //API Url
                    this.url = 'https://radiant-waters-52080.herokuapp.com';
                }
                //Return all Positions
                PositionService.prototype.getPositions = function () {
                    return this.http.get(this.url + "/positions");
                };
                //Save the Position
                PositionService.prototype.savePosition = function (position) {
                    return this.http.put(this.url + "/position/" + position._id, position);
                };
                //Get Position
                PositionService.prototype.getPosition = function (id) {
                    return this.http.get(this.url + "/position/" + id);
                };
                return PositionService;
            }());
            PositionService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PositionService);
            /***/ 
        }),
        /***/ "./src/app/data/position.ts": 
        /*!**********************************!*\
          !*** ./src/app/data/position.ts ***!
          \**********************************/
        /*! exports provided: Position */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function () { return Position; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Position = /** @class */ (function () {
                function Position() {
                    this._id = "";
                    this.PositionName = "";
                    this.PositionDescription = "";
                    this.PositionBaseSalary = 0;
                    this.__v = 0;
                }
                return Position;
            }());
            /***/ 
        }),
        /***/ "./src/app/employee/employee.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/employee/employee.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".center {\r\n    margin-top: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/employee/employee.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/employee/employee.component.ts ***!
          \************************************************/
        /*! exports provided: EmployeeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () { return EmployeeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_employeeRaw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/employeeRaw */ "./src/app/data/employeeRaw.ts");
            /* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
            /* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var EmployeeComponent = /** @class */ (function () {
                function EmployeeComponent(empService, posService, actRoute) {
                    this.empService = empService;
                    this.posService = posService;
                    this.actRoute = actRoute;
                    this.paramSubscription = "";
                    this.employeeSubscription = "";
                    this.getPositionSubscription = "";
                    this.saveEmployeeSubscription = "";
                    this.employee = new _data_employeeRaw__WEBPACK_IMPORTED_MODULE_2__["EmployeeRaw"];
                    this.positions = [];
                    this.successMessage = false;
                    this.failMessage = false;
                }
                EmployeeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //Get and Store the subscripiton into paramSubscription
                    this.paramSubscription = this.actRoute.params.subscribe(function (parms) {
                        //Store the id
                        var _id = parms['_id'];
                        //Using the _id get the Employee
                        _this.employeeSubscription = _this.empService.getEmployee(_id).subscribe(function (emp) {
                            _this.employee = emp[0];
                        });
                    });
                    //Get all Postions
                    this.getPositionSubscription = this.posService.getPositions().subscribe(function (pos) {
                        _this.positions = pos;
                    });
                };
                EmployeeComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.saveEmployeeSubscription = this.empService.saveEmployee(this.employee).subscribe(function () {
                        //Set the Success Message to true
                        _this.successMessage = true;
                        //Set the successMessage to false if it timesout for more than 2500ms
                        setTimeout(function () {
                            _this.successMessage = false;
                        }, 2500);
                    }),
                        function () {
                            _this.failMessage = true;
                            //Set the failMessage to false if it timesout for more than 2500ms
                            setTimeout(function () {
                                _this.failMessage = false;
                            }, 2500);
                        };
                };
                EmployeeComponent.prototype.ngOnDestroy = function () {
                    //Unsubscribe to all Subscriptions
                    if (this.paramSubscription) {
                        this.paramSubscription.unsubscribe();
                    }
                    if (this.employeeSubscription) {
                        this.employeeSubscription.unsubscribe();
                    }
                    if (this.getPositionSubscription) {
                        this.getPositionSubscription.unsubscribe();
                    }
                    if (this.saveEmployeeSubscription) {
                        this.saveEmployeeSubscription.unsubscribe();
                    }
                };
                return EmployeeComponent;
            }());
            EmployeeComponent.ctorParameters = function () { return [
                { type: _data_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
                { type: _data_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
                })
            ], EmployeeComponent);
            /***/ 
        }),
        /***/ "./src/app/employees.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/employees.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".center { \r\n    margin-top:40px; \r\n}\r\n\r\n.table-responsive {\r\n    margin-bottom:60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHsgXHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7IFxyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/employees.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/employees.component.ts ***!
          \****************************************/
        /*! exports provided: EmployeesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function () { return EmployeesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var EmployeesComponent = /** @class */ (function () {
                //Constructor
                function EmployeesComponent(empService, router) {
                    this.empService = empService;
                    this.router = router;
                    this.employees = [];
                    this.getEmployeesSub = "";
                    this.loadingError = false;
                }
                EmployeesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //Store all employees and store a reference of the subscription
                    this.getEmployeesSub = this.empService.getEmployees().subscribe(function (employees) {
                        _this.employees = employees;
                        _this.filteredEmployees = employees;
                    }),
                        function () {
                            //Set the loading error to true if there was an error returning the data
                            _this.loadingError = true;
                        };
                };
                EmployeesComponent.prototype.ngOnDestroy = function () {
                    //Empty the saved subscription
                    if (this.getEmployeesSub) {
                        this.getEmployeesSub.unsubscribe();
                    }
                };
                EmployeesComponent.prototype.routeEmployee = function (id) {
                    this.router.navigate(['/employee', id]);
                };
                EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
                    var filterString = event.target.value.toLowerCase();
                    this.filteredEmployees = this.employees.filter(function (employee) {
                        return ((employee.FirstName.toLowerCase().indexOf(filterString) !== -1) || (employee.LastName.toLowerCase().indexOf(filterString) !== -1))
                            || (employee.Position.PositionName.toLowerCase().indexOf(filterString) !== -1);
                    });
                };
                return EmployeesComponent;
            }());
            EmployeesComponent.ctorParameters = function () { return [
                { type: _data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employees',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employees.component.css */ "./src/app/employees.component.css")).default]
                })
            ], EmployeesComponent);
            /***/ 
        }),
        /***/ "./src/app/footer.component.css": 
        /*!**************************************!*\
          !*** ./src/app/footer.component.css ***!
          \**************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/footer.component.ts": 
        /*!*************************************!*\
          !*** ./src/app/footer.component.ts ***!
          \*************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/home.component.css": 
        /*!************************************!*\
          !*** ./src/app/home.component.css ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("section { \r\n    padding: 70px 0; \r\n}\r\n\r\n.no-margin { \r\n    margin: 0; \r\n    padding: 0; \r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHsgXHJcbiAgICBwYWRkaW5nOiA3MHB4IDA7IFxyXG59XHJcblxyXG4ubm8tbWFyZ2luIHsgXHJcbiAgICBtYXJnaW46IDA7IFxyXG4gICAgcGFkZGluZzogMDsgXHJcbn0gIl19 */");
            /***/ 
        }),
        /***/ "./src/app/home.component.ts": 
        /*!***********************************!*\
          !*** ./src/app/home.component.ts ***!
          \***********************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/nav.component.css": 
        /*!***********************************!*\
          !*** ./src/app/nav.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/nav.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/nav.component.ts ***!
          \**********************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavComponent = /** @class */ (function () {
                function NavComponent() {
                }
                NavComponent.prototype.ngOnInit = function () {
                };
                return NavComponent;
            }());
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav.component.css")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/page-not-found.component.css": 
        /*!**********************************************!*\
          !*** ./src/app/page-not-found.component.css ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n  }\r\n  \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .notfound {\r\n    max-width: 520px;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 1.4;\r\n  }\r\n  \r\n  .notfound .notfound-404 {\r\n    height: 190px;\r\n  }\r\n  \r\n  .notfound .notfound-404 h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 146px;\r\n    font-weight: 700;\r\n    margin: 0px;\r\n    color: #232323;\r\n  }\r\n  \r\n  .notfound .notfound-404 h1>span {\r\n    display: inline-block;\r\n    width: 120px;\r\n    height: 120px;\r\n    background-image: url('emoji.png');\r\n    background-size: cover;\r\n    transform: scale(1.4);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .notfound h2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    color: #232323;\r\n  }\r\n  \r\n  .notfound p {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #787878;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .notfound a {\r\n    font-family: 'Montserrat', sans-serif;\r\n    display: inline-block;\r\n    padding: 12px 30px;\r\n    font-weight: 700;\r\n    background-color: #f99827;\r\n    color: #fff;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    transition: 0.2s all;\r\n  }\r\n  \r\n  .notfound a:hover {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  @media only screen and (max-width: 767px) {\r\n    .notfound .notfound-404 {\r\n      height: 115px;\r\n    }\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 86px;\r\n    }\r\n    .notfound .notfound-404 h1>span {\r\n      width: 86px;\r\n      height: 86px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFHQSxnQ0FBZ0M7RUFDMUM7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFtRDtJQUNuRCxzQkFBc0I7SUFHZCxxQkFBcUI7SUFDN0IsV0FBVztFQUNiOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBRXJCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGZvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gICNub3Rmb3VuZCAubm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCB7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMT5zcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvZW1vamkucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk5ODI3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgIH1cclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgICAgZm9udC1zaXplOiA4NnB4O1xyXG4gICAgfVxyXG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDE+c3BhbiB7XHJcbiAgICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgICBoZWlnaHQ6IDg2cHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found.component.ts": 
        /*!*********************************************!*\
          !*** ./src/app/page-not-found.component.ts ***!
          \*********************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/position/position.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/position/position.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".center {\r\n    margin-top: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9uL3Bvc2l0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/position/position.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/position/position.component.ts ***!
          \************************************************/
        /*! exports provided: PositionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function () { return PositionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/position */ "./src/app/data/position.ts");
            /* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PositionComponent = /** @class */ (function () {
                function PositionComponent(posService, actRoute) {
                    this.posService = posService;
                    this.actRoute = actRoute;
                    this.paramSubscription = "";
                    this.positionSubscription = "";
                    this.savePositionSubscription = "";
                    this.position = new _data_position__WEBPACK_IMPORTED_MODULE_2__["Position"];
                    this.successMessage = false;
                    this.failMessage = false;
                }
                PositionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //Store the Subscription
                    this.paramSubscription = this.actRoute.params.subscribe(function (params) {
                        //Get and Store the id
                        var id = params['_id'];
                        //Using the id get the Position
                        _this.positionSubscription = _this.posService.getPosition(id).subscribe(function (pos) {
                            _this.position = pos[0];
                        });
                    });
                };
                PositionComponent.prototype.onSubmit = function () {
                    var _this = this;
                    //Save the Position
                    this.savePositionSubscription = this.posService.savePosition(this.position).subscribe(function () {
                        //Set the success message to true
                        _this.successMessage = true;
                        //Set the successMessage to false if it timesout for more than 2500ms
                        setTimeout(function () {
                            _this.successMessage = false;
                        }, 2500);
                    }),
                        function () {
                            //Set the fail message to true
                            _this.failMessage = true;
                            //Set the fail message to false if it timesout for more than 2500ms
                            setTimeout(function () {
                                _this.failMessage = false;
                            }, 2500);
                        };
                };
                PositionComponent.prototype.ngOnDestroy = function () {
                    //Unsubscribe to all Subscriptions
                    if (this.paramSubscription) {
                        this.paramSubscription.unsubscribe();
                    }
                    if (this.positionSubscription) {
                        this.positionSubscription.unsubscribe();
                    }
                    if (this.savePositionSubscription) {
                        this.savePositionSubscription.unsubscribe();
                    }
                };
                return PositionComponent;
            }());
            PositionComponent.ctorParameters = function () { return [
                { type: _data_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-position',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./position.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/position/position.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./position.component.css */ "./src/app/position/position.component.css")).default]
                })
            ], PositionComponent);
            /***/ 
        }),
        /***/ "./src/app/positions.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/positions.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".center { \r\n    margin-top:40px; \r\n}\r\n\r\n.table-responsive {\r\n    margin-bottom:60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHsgXHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7IFxyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/positions.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/positions.component.ts ***!
          \****************************************/
        /*! exports provided: PositionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function () { return PositionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PositionsComponent = /** @class */ (function () {
                //Constructor
                function PositionsComponent(posService, router) {
                    this.posService = posService;
                    this.router = router;
                    this.positions = [];
                    this.getPositionsSub = "";
                    this.loadingError = false;
                }
                PositionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //Store all Positions and store a reference of the subscription
                    this.getPositionsSub = this.posService.getPositions().subscribe(function (positions) {
                        _this.positions = positions;
                    }),
                        function () {
                            //Set the loading error to true if there was an error returning the data
                            _this.loadingError = true;
                        };
                };
                PositionsComponent.prototype.ngOnDestroy = function () {
                    //Empty the saved subscription
                    if (this.getPositionsSub) {
                        this.getPositionsSub.unsubscribe();
                    }
                };
                //Route to a specific Position
                PositionsComponent.prototype.routePosition = function (id) {
                    this.router.navigate(['/position', id]);
                };
                return PositionsComponent;
            }());
            PositionsComponent.ctorParameters = function () { return [
                { type: _data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-positions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./positions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/positions.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./positions.component.css */ "./src/app/positions.component.css")).default]
                })
            ], PositionsComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\c0679\Desktop\WEB422\Assignment 6\Assignment6-App\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map