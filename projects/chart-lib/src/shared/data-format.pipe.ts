import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { DataTraits } from './data-traits.enum';
import { formatDataTrait } from './data-format';

@Pipe({ name: 'gaDataFormat' })
export class DataFormatPipe implements PipeTransform {
    constructor(@Inject(LOCALE_ID) private _locale: string) { }

    transform(value: any, trait: DataTraits = DataTraits.Plain, locale?: string): any {
        if (value == null || value == undefined) return '--';
        locale = locale || this._locale;
        return formatDataTrait(value, trait, locale)
    }
}