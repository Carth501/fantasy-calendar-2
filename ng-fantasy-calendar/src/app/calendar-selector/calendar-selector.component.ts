import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/models/Calendar';

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.scss']
})
export class CalendarSelectorComponent implements OnInit {

  calendarGroup = {
    calendars: [
    {
      title: 'Gregorian Calendar',
      daysOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      months: [
        {
          monthName: 'January',
          daysInMonth: '31',
          leapDayRules: []
        },
        {
          monthName: 'February',
          daysInMonth: '28',
          leapDayRules: []
        },
        {
          monthName: 'March',
          daysInMonth: '31',
          leapDayRules: []
        },
        {
          monthName: 'April',
          daysInMonth: '30',
          leapDayRules: []
        },
        {
          monthName: 'May',
          daysInMonth: '31',
          leapDayRules: []
        },
        {
          monthName: 'June',
          daysInMonth: '30',
          leapDayRules: []
        },
        {
          monthName: 'July',
          daysInMonth: '31',
          leapDayRules: []
        },
        {
          monthName: 'August',
          daysInMonth: '31',
          leapDayRules: []
        },
        {
          monthName: 'September',
          daysInMonth: '30',
          leapDayRules: []
        },
        {
          monthName: 'October',
          daysInMonth: '31',
          leapDayRules: []
        },
        {
          monthName: 'November',
          daysInMonth: '30',
          leapDayRules: []
        },
        {
          monthName: 'December',
          daysInMonth: '31',
          leapDayRules: []
        }
      ]
    }
    ],
    dayID: 0
  };

  activeCalendar: Calendar;

  constructor() { }

  ngOnInit(): void {
  }

}
