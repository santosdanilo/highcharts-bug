import { Input, Component, forwardRef } from '@angular/core';
import { LegendComponent } from './legend/legend.model';

@Component({
    selector: 'ga-legend',
    template: '<div>mockLegend</div>',
    providers: [{ provide: LegendComponent, useValue: forwardRef(() => MockLegend) }]
})
export default class MockLegend extends LegendComponent {
    @Input() chart;
    @Input() details;
    @Input() traits;
}