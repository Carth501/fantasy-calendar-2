import { Injectable } from '@angular/core';
import { Calendar } from 'src/models/Calendar';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  calculateYear(
    calendar: Calendar,
    dayID: number
  ): [year: number, remainder: number] {
    const avgYear = this.daySum(calendar);
    const year = Math.round(dayID / avgYear);
    const remainder = dayID % avgYear;
    return [year, remainder];
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
}
