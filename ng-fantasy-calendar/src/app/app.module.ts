import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarSelectorComponent } from './calendar-selector/calendar-selector.component';
import { FCMaterialModule } from 'src/shared/FCMaterialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FCMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
