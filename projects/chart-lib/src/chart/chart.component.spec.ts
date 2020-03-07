import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HighchartsChartModule } from 'highcharts-angular';
import { MockComponent, MockRender } from 'ng-mocks'

import { Options } from 'highcharts'
import { ChartComponent } from './chart.component';
import { ListLegendComponent } from './list-legend/list-legend.component';
import { ChartHelper } from './chart-helper';
import { SharedModule } from '../../src/shared/shared.module';
import { By } from '@angular/platform-browser';
import { LegendComponent } from './legend/legend.model';
import { Input } from '@angular/core';
import MockLegend from './mock-legend';

describe('[Unit] ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HighchartsChartModule
      ],
      declarations: [
        ChartComponent,
        MockComponent(ListLegendComponent)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('If options is null, _options should be replaced by a minimal object', () => {
    component.options = null
    fixture.detectChanges();
    expect(component._options).toBe(ChartHelper.minimalObject)
  })

  it('If options is undefined, _options should be replaced by a minimal object', () => {
    component.options = undefined
    fixture.detectChanges();
    expect(component._options).toBe(ChartHelper.minimalObject)
  })

  it('If options is an object, _options should be that object', () => {
    const obj: Options = {
      series: [
        {
          data: [1, 2, 3],
          type: 'bar'
        }
      ]
    }
    component.options = obj
    fixture.detectChanges();
    expect(component._options).toBe(obj)
  })

  it('On options update, should update chartInstance', () => {
    fixture.detectChanges();
    const obj: Options = {
      series: [
        {
          data: [1, 2, 3],
          type: 'bar'
        }
      ]
    }
    const oldInstance = component.chartInstance
    component.options = obj
    fixture.detectChanges();
    expect(component.chartInstance).not.toBe(oldInstance)
  })
});

describe('[Content Projection] ChartComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HighchartsChartModule,
        SharedModule,
      ],
      declarations: [
        ChartComponent,
        MockLegend
      ]
    })
  }));

  it('should create', () => {
    const fixture = MockRender(`<ga-chart></ga-chart>`);
    const component = fixture.debugElement.query(By.directive(ChartComponent)).componentInstance as ChartComponent
    fixture.detectChanges();
    expect(component).toBeTruthy();
  })

  xit('On new instance, and existing legend, should call setLegend', () => {
    fail('Not implemented')
  })

  xit('On new instance, and not existing legend, should not call setLegend', () => {
    fail('Not implemented')
  })
});