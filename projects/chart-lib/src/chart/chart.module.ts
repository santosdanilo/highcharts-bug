import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ChartService } from './chart.service';
import { Options } from 'highcharts';
import { ChartComponent } from './chart.component';
import { SharedModule } from '../shared/public-api';

@NgModule({
  declarations: [ChartComponent],
  exports: [ChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    SharedModule
  ],
  providers: [ChartService]
})
export class ChartModule {
  constructor(private service: ChartService) {
    this.service.setTheme(this.globalChartOptions)
  }

  get globalChartOptions(): Options {
    return {
      colors: ['rgba(255, 199, 44,1)', 'rgba(0, 117, 175,1)', 'rgba(204, 102, 102,1)', 'rgba(150, 192, 31,1)'],
      legend: {
        enabled: false
      },
      title: {
        text: null
      },
      yAxis: {
        title: null
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false
          },
        },
        area: {
          fillOpacity: 0.3,
          marker: {
            enabled: false
          }
        }
      }
    }
  }
}
