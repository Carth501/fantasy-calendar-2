import { Injectable } from '@angular/core';
import { Calendar } from 'src/models/Calendar';
import { CalendarGroup } from 'src/models/CalendarGroup';
import { Day } from 'src/models/Day';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}
  calendarGroup = {
    calendars: [
      {
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
    dayID: 737500,
  };

  getCalendarGroup(): CalendarGroup {
    return this.calendarGroup;
  }

  getCalendarTitles(): string[] {
    const titles: string[] = [];
    this.calendarGroup.calendars.forEach((calendar) =>
      titles.push(calendar.title)
    );
    return titles;
  }

  calculateYear(calendar: Calendar, dayID: number): number {
    const avgYear = this.daySum(calendar);
    const year = Math.floor(dayID / avgYear);
    return year;
  }

  calculateDayOfYear(calendar: Calendar, dayID: number): number {
    const avgYear = this.daySum(calendar);
    const dayOfYear = Math.floor(dayID % avgYear);
    return dayOfYear;
  }

  daySum(calendar: Calendar): number {
    let sum = 0;
    calendar.months.forEach((month) => {
      let leapDayRuleAverage = 0;
      month.leapDayRules.forEach((rule) => {
        leapDayRuleAverage += rule.delta * rule.frequency;
      });
      sum += month.daysInMonth + leapDayRuleAverage;
    });
    return sum;
  }

  getDOW(calendar: Calendar, dayID: number): number {
    return dayID % calendar.daysOfWeek.length;
  }

  getMonthLength(calendar: Calendar, year: number, month: number): number {
    //beware off-by-one error
    let monthLength = calendar.months[month].daysInMonth;
    calendar.months[month].leapDayRules.forEach((rule) => {
      if ((year - rule.offset) % (1 / rule.frequency) === 0) {
        monthLength += rule.delta;
      }
    });
    return monthLength;
  }

  getMonthArray(calendar: Calendar, dayID: number): Day[] {
    const month: Day[] = [];
    const year = this.calculateYear(calendar, dayID);
    const dayOfYear = this.calculateDayOfYear(calendar, dayID);
    let dayValue = 0;
    let monthNum = 0;
    let repeat = true;
    let monthLength = 0;
    while (repeat) {
      monthLength = this.getMonthLength(calendar, year, dayID);
      dayValue += monthLength;
      if (dayValue < dayOfYear) {
        monthNum++;
      } else {
        repeat = false;
      }
    }
    const dayOfMonth = monthLength - (dayValue - dayOfYear);
    const startingDOW = this.getDOW();
    return month;
  }
}
