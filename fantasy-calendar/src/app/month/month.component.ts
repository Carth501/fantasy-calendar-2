import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  _displayedColumns!: string[];
  _monthName!: string;
  _year!: number;
  datasource!: MatTableDataSource<Day[]>;
  JSON = JSON;

  @Input() set intakeCalendar(calendar: Calendar) {
    this._calendar = calendar;
    this._displayedColumns = this._calendar.daysOfWeek;
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
      this._month = this.calculator.getMonthArray(this._calendar, this._dayID);
      this._year = this.calculator.calculateYear(this._calendar, this._dayID);
      const monthStats = this.calculator.findMonth(
        this._calendar,
        this._year,
        this.calculator.calculateDayOfYear(this._calendar, this._dayID)
      );
      const monthNum = monthStats[0];
      this._monthName = this._calendar.months[monthNum].monthName;
      this.datasource = new MatTableDataSource(this._month);
    }
  }
}
