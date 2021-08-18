import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from 'src/models/Calendar';
import { CalculatorService } from '../services/calculator/calculator.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  _calendar!: Calendar;
  _dayID!: number;
  _year!: number;

  @Input() set intakeCalendar(calendar: Calendar) {
    this._calendar = calendar;
    this.calculateYear();
  }

  @Input() set intakeDayID(dayID: number) {
    this._dayID = dayID;
    this.calculateYear();
  }
  constructor(private calculator: CalculatorService) {}

  ngOnInit(): void {}

  calculateYear(): void {
    if (this._calendar != null && this._dayID) {
      const year = this.calculator.calculateYear(this._calendar, this._dayID);
      this._year = year;
      this._calendar.daysOfWeek;
    }
  }
}
