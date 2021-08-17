import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FCMaterialModule } from 'src/shared/FCMaterialModule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarSelectorComponent } from './calendar-selector/calendar-selector.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonthComponent } from './month/month.component';

@NgModule({
  declarations: [AppComponent, CalendarSelectorComponent, CalendarComponent, MonthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FCMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
