import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/models/Calendar';
import { CalendarGroup } from 'src/models/CalendarGroup';
import { CalculatorService } from '../services/calculator/calculator.service';

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.scss'],
})
export class CalendarSelectorComponent implements OnInit {
  title = 'Fantasy Calendar';
  subtitle = 'v2';
  activeCalendar!: Calendar;
  calendarGroup: CalendarGroup;

  constructor(private calculator: CalculatorService) {
    this.calendarGroup = this.calculator.getCalendarGroup();
    this.activeCalendar = this.calendarGroup.calendars[0];
  }

  ngOnInit(): void {}
}
