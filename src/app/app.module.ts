import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ChartModule } from 'projects/chart-lib/src/public-api';
import { SharedModule } from 'projects/chart-lib/src/public-api';
import { PanelModule } from 'projects/chart-lib/src/public-api';

// the second parameter 'fr-FR' is optional
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    SharedModule,
    PanelModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
