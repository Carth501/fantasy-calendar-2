import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Calendar } from 'src/models/Calendar';
import { Day } from 'src/models/Day';
import { Incident } from 'src/models/Events/Incident';
import { CalculatorService } from '../services/calculator/calculator.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MonthComponent implements OnInit {
  _calendar!: Calendar;
  _dayID!: number;
  _univDayID!: number;
  _month!: Day[][];
  _dowNames!: string[];
  _monthName!: string;
  _monthNumber!: number;
  _year!: number;
  @Input() incidentList!: Incident[];
  JSON = JSON;
  debugMode: boolean = false;

  @Input() set intakeCalendar(calendar: Calendar) {
    this._calendar = calendar;
    this._dowNames = this._calendar.daysOfWeek;
    this.calculateMonth();
  }

  @Input() set intakeDayID(dayID: number) {
    this._univDayID = dayID;
    this.calculateMonth();
  }

  constructor(private calculator: CalculatorService) {}

  ngOnInit(): void {}

  calculateMonth(): void {
    if (this._calendar != null && this._univDayID) {
      this._dayID = this._univDayID + this._calendar.offsetDayID;
      const yearData = this.calculator.calculateYear(
        this._calendar,
        this._dayID
      );
      this._year = yearData[0];
      const monthStats = this.calculator.findMonth(
        this._calendar,
        this._year,
        yearData[1]
      );
      this._monthNumber = monthStats[0];
      this._monthName = this._calendar.months[this._monthNumber].monthName;
      this._month = this.calculator.getMonth2DArray(
        this._calendar,
        this._monthNumber,
        this._year,
        this._dayID,
        this.incidentList
      );
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
      this._dayID,
      this.incidentList
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
      this._dayID,
      this.incidentList
    );
  }

  setMonth(event: { value: number; }): void {
    this._monthNumber = event.value;
    this._month = this.calculator.getMonth2DArray(
      this._calendar,
      this._monthNumber,
      this._year,
      this._dayID,
      this.incidentList
    );
    this._monthName = this._calendar.months[this._monthNumber].monthName;
  }

  setYear(year: number): void {
    this._year = year;
    this._month = this.calculator.getMonth2DArray(
      this._calendar,
      this._monthNumber,
      this._year,
      this._dayID,
      this.incidentList
    );
  }
}
