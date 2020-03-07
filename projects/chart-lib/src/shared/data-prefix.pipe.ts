import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { DataTraits } from './data-traits.enum';
import { formatDataPrefix } from './data-format';

@Pipe({ name: 'gaDataPrefix' })
export class DataPrefixPipe implements PipeTransform {
    constructor(@Inject(LOCALE_ID) private _locale: string) { }

    transform(value: any, trait: DataTraits = DataTraits.Plain, locale?: string): any {
        if (value == null || value == undefined) return '--';
        locale = locale || this._locale;
        return formatDataPrefix(value, trait, locale)
    }
}