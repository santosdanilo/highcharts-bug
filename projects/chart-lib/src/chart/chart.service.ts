import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts'

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  setTheme(options: Highcharts.Options) {
    Highcharts.setOptions(options);
  }
}
