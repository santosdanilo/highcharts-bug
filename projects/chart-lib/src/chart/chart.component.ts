import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation, Inject, LOCALE_ID, ViewChild, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import { Options, Chart } from 'highcharts'
import { ChartHelper } from './chart-helper';
import { HighchartsChartComponent } from 'highcharts-angular';
import { DataTraits, formatDataTrait, formatDataPrefix } from '../shared/public-api';
import { merge } from 'lodash/fp'

@Component({
  selector: 'ga-chart',
  template: `
    <header class="chart-title">{{title}}</header>
    <div class="chart-box" [ngClass]="{'fill-box': !legend}">
      <highcharts-chart *ngIf="!!options"
            [Highcharts]="Highcharts"
            [options]="options"
            [oneToOne]="true"
            (chartInstance)="getInstance($event)"
            class="box">
      </highcharts-chart>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./chart.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  @ViewChild(HighchartsChartComponent, { static: true }) highchartsWrapper: HighchartsChartComponent;

  _options: Options = null;
  @Input()
  get options() {
    return this._options
  }
  set options(value: Options) {
    /*
    if (!value) {
      value = ChartHelper.minimalObject
    }*/

    this._options = null;
    const self = this
    this._options = merge(self.defautChartOptions, { ...value })
  };
  @Input() title: string;
  @Input() traits: DataTraits;

  Highcharts: typeof Highcharts = Highcharts;
  chartInstance: Chart = null

  constructor(@Inject(LOCALE_ID) private _locale: string) { }

  ngOnInit() {
    const oldUpdateOrCreateChart = this.highchartsWrapper.updateOrCreateChart.bind(this.highchartsWrapper)
    const handler = function () {
      oldUpdateOrCreateChart()
      if (this.chart && this.chart.update) {
        this.chartInstance.emit(this.chart)
      }
    }
    this.highchartsWrapper.updateOrCreateChart = handler.bind(this.highchartsWrapper)
  }

  getInstance(event: Chart) {
    this.chartInstance = event as Chart
  }

  get defautChartOptions(): Options {
    const self = this
    return {
      //@ts-ignore
      // yAxis: {
      //   labels: {
      //     formatter: function () {
      //       const label: string = this.axis.defaultLabelFormatter.call(this)
      //       return formatDataTrait(label, self.traits, self._locale)
      //     }
      //   }
      // },
      tooltip: {
        formatter: function () {
          const y = formatDataPrefix(this.y, self.traits, self._locale)
          return `<span>${this.x} </span><b>${y}</b><br/> ${this.series.name}`
        }
      }
    }
  }
}
