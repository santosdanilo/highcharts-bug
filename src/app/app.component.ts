import { Component } from '@angular/core';
import { of, timer, iif, interval } from 'rxjs';
import { delay, mergeMap, tap, switchMap, take } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  template: `
    <main>
      <ga-chart class="stack" [title]="'gaga'" [options]="value" [traits]="'money'">
    </ga-chart>
    </main>
  `,
  styles: [`
    main{
      width: 95%;
      margin: 1em auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1em;
    }
  `]
})
export class AppComponent {
  obs1 = of({
    chart: {
      type: 'bar'
    },
    xAxis: {
      visible: true
    },
    series: [
      { data: [1, 2], type: 'bar', id: '0' },
      { data: [2, 3], type: 'bar', id: '1' },
      { data: [3, 4], type: 'bar', id: '2' }
    ]
  })

  obs2 = of({
    chart: {
      type: 'column',
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      }
    },
    series: [
      { data: [1, 2], type: 'column', id: '0' },
      { data: [2, 3], type: 'column', id: '1' },
      { data: [3, 4], type: 'line', id: '2' },
      { data: [5, 6], type: 'line', id: '3' }
    ]
  })
  highchart = interval(3000).pipe(
    switchMap(t => iif(() => t % 2 == 0, this.obs1, this.obs2)),
    take(7)
  ).subscribe(c => this.value = c)

  value

  consumoAgregadoDetails = {
    '0': {
      value: [1050, 1100, 1090, 1050, 1230, 1130, 1090, 1250, 1150, 1180, null, null].reduce((acc, value) => acc + (value || 0)),
      fraction: [
        { label: 'Distribuidora', value: 4500 },
        { label: 'Prestação de Serviços', value: 4500 },
        { label: 'Cessão de Direito Real de Superfície', value: 4500 },
        { label: 'Locação de Bens Móveis', value: 4500 }
      ]
    },
    '1': {
      value: [920, 880, 920, 850, 770, 960, 800, 1050, 890, 900, 840, 970].reduce((acc, value) => acc + (value || 0))
    },
    '2': {
      value: [330, 400, 390, 330, 450, 400, 300, 500, 300, 400, null, null].reduce((acc, value) => acc + (value || 0))
    },
    '3': {
      value: [830, 900, 890, 830, 950, 900, 800, 1000, 800, 900, null, null].reduce((acc, value) => acc + (value || 0))
    }
  }
}
