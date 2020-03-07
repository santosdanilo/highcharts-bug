import { TestBed } from '@angular/core/testing';
import * as Highcharts from 'highcharts'
import { ChartService } from './chart.service';

describe('ChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartService = TestBed.get(ChartService);
    expect(service).toBeTruthy();
  });

  it('should set chart colors', () => {
    const service: ChartService = TestBed.get(ChartService);
    const obj = {
      colors: ['#058DC7', '#50B432', '#ED561B'],
    };
    service.setTheme(obj)
    expect(obj.colors).toBe(Highcharts.defaultOptions.colors)
  });
});
