import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from 'src/models/Calendar';
import { Day } from 'src/models/Day';
import { CalculatorService } from '../services/calculator/calculator.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
})
export class MonthComponent implements OnInit {
  _calendar!: Calendar;
  _dayID!: number;
  _month!: Day[][];
  _dowNames!: string[];
  _monthName!: string;
  _monthNumber!: number;
  _year!: number;
  JSON = JSON;

  @Input() set intakeCalendar(calendar: Calendar) {
    this._calendar = calendar;
    this._dowNames = this._calendar.daysOfWeek;
    this.calculateMonth();
  }

  @Input() set intakeDayID(dayID: number) {
    this._dayID = dayID;
    this.calculateMonth();
  }

  constructor(private calculator: CalculatorService) {}

  ngOnInit(): void {}

  calculateMonth(): void {
    if (this._calendar != null && this._dayID) {
      this._month = this.calculator.getMonth2DArrayByDayID(
        this._calendar,
        this._dayID
      );
      this._year = this.calculator.calculateYear(this._calendar, this._dayID);
      const monthStats = this.calculator.findMonth(
        this._calendar,
        this._year,
        this.calculator.calculateDayOfYear(this._calendar, this._dayID)
      );
      this._monthNumber = monthStats[0];
      this._monthName = this._calendar.months[this._monthNumber].monthName;
    }
  }

  changeMonth(delta: number): void {
    this._monthNumber += delta;
    if (this._monthNumber < 0) {
      this._year--;
      this._monthNumber = this._calendar.months.length - 1;
    } else if (this._monthNumber >= this._calendar.months.length) {
      this._year++;
      this._monthNumber = 0;
    }
    this._month = this.calculator.getMonth2DArray(
      this._calendar,
      this._monthNumber,
      this._year,
      this._dayID
    );
    if (
      this._monthNumber < 0 ||
      this._monthNumber >= this._calendar.months.length
    ) {
      throw '_monthNumber is out of range! _monthNumber = ' + this._monthNumber;
    }
    this._monthName = this._calendar.months[this._monthNumber].monthName;
  }

  changeYear(delta: number): void {
    this._year += delta;
    this._month = this.calculator.getMonth2DArray(
      this._calendar,
      this._monthNumber,
      this._year,
      this._dayID
    );
  }
}
