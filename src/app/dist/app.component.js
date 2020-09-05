"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var constants_1 = require("./constants");
var AppComponent = /** @class */ (function () {
    function AppComponent(_http) {
        this._http = _http;
        this.filterYear = 1;
        this.filterSL = '';
        this.filterSLaunch = '';
        this.params = new http_1.HttpParams().set('limit', '100');
        this.filterYears = constants_1.filterYears;
        this.spaceXData = this._http.get(constants_1.dataURL, { params: this.params });
    }
    AppComponent.prototype.filterByYear = function (year) {
        this.params = this.params.set('launch_year', year.toString());
        this.spaceXData = this._http.get(constants_1.dataURL, { params: this.params });
        this.filterYear = year;
    };
    AppComponent.prototype.filterBySL = function (value) {
        this.params = this.params.set('land_success', value);
        this.spaceXData = this._http.get(constants_1.dataURL, { params: this.params });
        this.filterSL = value;
    };
    AppComponent.prototype.filterBySLanuch = function (value) {
        this.params = this.params.set('launch_success', value);
        this.spaceXData = this._http.get(constants_1.dataURL, { params: this.params });
        this.filterSLaunch = value;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
