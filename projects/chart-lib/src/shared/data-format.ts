import { formatNumber, formatPercent, getCurrencySymbol } from '@angular/common';
import { DataTraits } from './data-traits.enum';

//https://github.com/angular/angular/blob/master/packages/common/src/pipes/number_pipe.ts

export function formatDataTrait(value: string | number, trait: DataTraits = DataTraits.Plain, locale = null) {
    switch (trait) {
        default:
            return value
    }
}

export function formatDataPrefix(value: string | number, trait: DataTraits = DataTraits.Plain, locale = null) {
    switch (trait) {
        default:
            return value
    }
}
