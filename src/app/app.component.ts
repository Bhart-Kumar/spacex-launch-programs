import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

import { dataURL, filterYears } from './constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    filterYears: number[];
    spaceXData: any;
    filterYear = 1;
    filterSL = '';
    filterSLaunch = '';
    params: any;
    constructor(private _http: HttpClient) {
        this.params = new HttpParams().set('limit', '100');
        this.filterYears = filterYears;
        this.spaceXData = this._http.get(dataURL, { params: this.params });
    }

    filterByYear(year: number) {
        this.params = this.params.set('launch_year', year.toString());
        this.spaceXData = this._http.get(dataURL, { params: this.params });
        this.filterYear = year;
    }
    filterBySL(value: string) {
        this.params = this.params.set('land_success', value);
        this.spaceXData = this._http.get(dataURL, { params: this.params });
        this.filterSL = value;
    }
    filterBySLanuch(value: string) {
        this.params = this.params.set('launch_success', value);
        this.spaceXData = this._http.get(dataURL, { params: this.params });
        this.filterSLaunch = value;
    }
}
