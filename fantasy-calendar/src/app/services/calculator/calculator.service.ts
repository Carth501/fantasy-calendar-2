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
        title: 'Hanke-Henry Permanent Calendar',
        daysOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        dowOffset: 0,
        months: [
          {
            monthName: 'January',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'February',
            daysInMonth: 30,
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
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'June',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'July',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'August',
            daysInMonth: 30,
            leapDayRules: [],
          },
          {
            monthName: 'September',
            daysInMonth: 31,
            leapDayRules: [],
          },
          {
            monthName: 'October',
            daysInMonth: 30,
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
            leapDayRules: [{ delta: 7, offset: 0, frequency: 0.1785714285714286 }],
          },
        ],
      },
    ],
    dayID: 738422,
    //dayID: 1,
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

  calculateYear(calendar: Calendar, dayID: number): [number, number] {
    let year = 0;
    let i = 1;
    let remainder = 0;
    if (dayID > 0) {
      while (i < dayID) {
        let x = this.calculateYearLength(calendar, year);
        i += x;
        if (!(i < dayID)) {
          remainder = x - (i - dayID);
        } else {
          year++;
        }
      }
    } else {
      while (i > dayID) {
        i -= this.calculateYearLength(calendar, year);
        year--;
        if (!(i < dayID)) {
          remainder = i - dayID;
        }
      }
    }
    return [year, remainder];
  }

  calculateYearStartDayID(calendar: Calendar, year: number) {
    let dayID = 0;
    let x = 0;
    while (x < year) {
      dayID += this.calculateYearLength(calendar, x);
      x++;
    }
    return dayID;
  }

  calculateYearLength(calendar: Calendar, year: number): number {
    let length = 0;
    calendar.months.forEach((month) => {
      length += month.daysInMonth;
      month.leapDayRules.forEach((rule) => {
        if ((year + rule.offset) % (1 / rule.frequency) < 1) {
          length += rule.delta;
        }
      });
    });
    return length;
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
      if ((year + rule.offset) % (1 / rule.frequency) < 1) {
        monthLength += rule.delta;
        console.log(monthLength);
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
    const startOfYearID = this.calculateYearStartDayID(calendar, year);
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
    const yearData = this.calculateYear(calendar, dayID);
    const year = yearData[0];
    const dayOfYear = yearData[1];
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
