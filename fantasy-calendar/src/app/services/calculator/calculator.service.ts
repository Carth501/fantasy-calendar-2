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
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        dowOffset: 5,
        months: [
          {
            monthName: 'January',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'February',
            daysInMonth: 28,
            leapDayRules: [{ delta: 1, offset: 0, frequency: 0.25 }],
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
        daysOfWeek: ['Monday', 'Tuesday'],
        dowOffset: 1,
        months: [
          {
            monthName: 'January',
            daysInMonth: 5,
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
        title: 'Gregorian Calendar 3',
        daysOfWeek: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        dowOffset: 1,
        months: [
          {
            monthName: 'January',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'February',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'March',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'April',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'May',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'June',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'July',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'August',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'September',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'October',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'November',
            daysInMonth: 2,
            leapDayRules: [],
          },
          {
            monthName: 'December',
            daysInMonth: 2,
            leapDayRules: [],
          },
        ],
      },
    ],
    dayID: 738402,
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
    const avgYear = this.dayAverage(calendar);
    const year = Math.floor(dayID / avgYear);
    return year;
  }

  calculateDayOfYear(calendar: Calendar, dayID: number): number {
    const avgYear = this.dayAverage(calendar);
    const dayOfYear = Math.floor(dayID % avgYear);
    return dayOfYear;
  }

  dayAverage(calendar: Calendar): number {
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
    return (dayID + calendar.dowOffset) % calendar.daysOfWeek.length;
  }

  getMonthLength(calendar: Calendar, year: number, month: number): number {
    //handles months outside of range, adjusts for year accordingly

    while (month < 0) {
      year--;
      month = +calendar.months.length;
    }
    while (month >= calendar.months.length) {
      year++;
      month = 0;
    }

    if (month < 0 || month >= calendar.months.length) {
      throw 'Month is out of range! month = ' + month;
    }

    let monthLength = calendar.months[month].daysInMonth;
    calendar.months[month].leapDayRules.forEach((rule) => {
      if ((year + rule.offset) % (1 / rule.frequency) === 0) {
        monthLength += rule.delta;
      }
    });
    return monthLength;
  }

  getMonth2DArray(
    calendar: Calendar,
    monthNum: number,
    year: number,
    dayID: number
  ): Day[][] {
    const avgYear = this.dayAverage(calendar);
    const startOfYearID = Math.ceil(avgYear * year);
    let x = 0;
    let startOfMonthID = startOfYearID;
    while (x < monthNum) {
      startOfMonthID += this.getMonthLength(calendar, year, x);
      x++;
    }
    let lastMonthLength: number;
    if (monthNum === 0) {
      lastMonthLength = this.getMonthLength(
        calendar,
        year - 1,
        calendar.months.length - 1
      );
    } else {
      lastMonthLength = this.getMonthLength(calendar, year, monthNum - 1);
    }
    const monthLength = this.getMonthLength(calendar, year, monthNum);
    const month: Day[][] = this.createDayArray(
      calendar,
      startOfMonthID,
      lastMonthLength,
      monthLength
    );
    this.checkDaysForSelected(dayID, month);
    return month;
  }

  getMonth2DArrayByDayID(calendar: Calendar, dayID: number): Day[][] {
    const year = this.calculateYear(calendar, dayID);
    const dayOfYear = this.calculateDayOfYear(calendar, dayID);
    const monthStats = this.findMonth(calendar, year, dayOfYear);
    const monthNum = monthStats[0];
    const monthLength = monthStats[1];
    const dayValue = monthStats[2];
    const selectedDayOfMonth = monthLength - (dayValue - dayOfYear);
    const monthStartID = dayID - selectedDayOfMonth;
    const lastMonthLength = this.getMonthLength(calendar, year, monthNum - 1);
    const month: Day[][] = this.createDayArray(
      calendar,
      monthStartID,
      lastMonthLength,
      monthLength
    );
    this.checkDaysForSelected(dayID, month);
    return month;
  }

  createDay(
    dayOfMonth: number,
    dayID: number,
    inActiveMonth: boolean,
    selectedDay: boolean
  ): Day {
    return {
      dayOfMonth: dayOfMonth,
      dayID: dayID,
      events: [],
      selectedDay: selectedDay,
      inActiveMonth: inActiveMonth,
    };
  }

  findMonth(
    calendar: Calendar,
    year: number,
    dayOfYear: number
  ): [monthNum: number, monthLength: number, dayValue: number] {
    let dayValue = 0;
    let monthNum = 0;
    let repeat = true;
    let monthLength = 0;
    while (repeat) {
      monthLength = this.getMonthLength(calendar, year, monthNum);
      dayValue += monthLength;
      if (dayValue <= dayOfYear) {
        monthNum++;
      } else {
        repeat = false;
      }
    }
    return [monthNum, monthLength, dayValue];
  }

  createDayArray(
    calendar: Calendar,
    monthStartID: number,
    lastMonthLength: number,
    monthLength: number
  ): Day[][] {
    const startingDOW = this.getDOW(calendar, monthStartID);
    let i = 0;
    const month: Day[][] = [[]];
    if (startingDOW % calendar.daysOfWeek.length != 0) {
      while (i < startingDOW) {
        const endOfLastMonthID = monthStartID - startingDOW + i;
        const dayOfMonth = lastMonthLength - startingDOW + i;
        month[0].push({
          dayOfMonth: dayOfMonth + 1,
          dayID: endOfLastMonthID,
          events: [],
          selectedDay: false,
          inActiveMonth: false,
          i: i,
        });
        //this.createDay(dayOfMonth, endOfLastMonthID, false, false)
        i++;
      }
    }
    let x = 0;
    let y = 0;
    while (x < monthLength) {
      const ID = monthStartID + x;
      const displayDay = x + i;
      const dowActiveMonth = displayDay % calendar.daysOfWeek.length;
      if (dowActiveMonth === 0) {
        y++;
        month.push([]);
      }
      month[y].push({
        dayOfMonth: x + 1,
        dayID: ID,
        events: [],
        selectedDay: false,
        inActiveMonth: true,
        i: i,
        x: x,
        y: y,
        dow: dowActiveMonth,
      });
      x++;
      //this.createDay(x, ID, true, ID === dayID)
    }
    let DOW = (x + i) % calendar.daysOfWeek.length;
    if (DOW > 0) {
      let z = 0;
      while (DOW < calendar.daysOfWeek.length) {
        const ID = monthStartID + x + z;
        month[y].push({
          dayOfMonth: z + 1,
          dayID: ID,
          events: [],
          selectedDay: false,
          inActiveMonth: false,
          i: i,
          x: x,
          y: y,
          z: z,
          dow: DOW,
        });
        //this.createDay(z, ID, false, false)
        z++;
        DOW++;
      }
    }
    return month;
  }

  checkDaysForSelected(dayID: number, month: Day[][]) {
    month.forEach((array) => {
      array.forEach((day) => {
        if (day.dayID === dayID) {
          day.selectedDay = true;
        }
      });
    });
  }
}
