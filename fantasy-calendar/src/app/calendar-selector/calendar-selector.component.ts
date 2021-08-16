import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/models/Calendar';

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.scss'],
})
export class CalendarSelectorComponent implements OnInit {
  title = 'Fantasy Calendar';
  subtitle = 'v2';
  activeCalendar!: Calendar;

  calendarGroup = {
    calendars: [
      {
        id: 0,
        title: 'Gregorian Calendar',
        daysOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        months: [
          {
            monthName: 'January',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'February',
            daysInMonth: 28,
            leapDayRules: [],
          },
          {
            monthName: 'March',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'April',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'May',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'June',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'July',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'August',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'September',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'October',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'November',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'December',
            daysInMonth: 31,
            leapDayRules: [],
          },
        ],
      },
      {
        id: 1,
        title: 'Gregorian Calendar 2',
        daysOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        months: [
          {
            monthName: 'January',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'February',
            daysInMonth: 28,
            leapDayRules: [],
          },
          {
            monthName: 'March',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'April',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'May',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'June',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'July',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'August',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'September',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'October',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'November',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'December',
            daysInMonth: 31,
            leapDayRules: [],
          },
        ],
      },
    ],
    dayID: 10,
  };

  constructor() {
    this.activeCalendar = this.calendarGroup.calendars[0];
  }

  ngOnInit(): void {}
}
