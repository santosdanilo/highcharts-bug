import { NgModule } from '@angular/core';
import { ProjectionDirective } from './projection.directive';
import { DataFormatPipe } from './data-format.pipe';
import { DataPrefixPipe } from './data-prefix.pipe';

@NgModule({
    declarations: [ProjectionDirective, DataFormatPipe, DataPrefixPipe],
    exports: [ProjectionDirective, DataFormatPipe, DataPrefixPipe],
    imports: []
})
export class SharedModule { }
