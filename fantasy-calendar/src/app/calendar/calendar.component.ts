import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from 'src/models/Calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() calendar!: Calendar;
  _dayID!: number;
  @Input() set dayID(dayID: number | undefined) {
    if(!!dayID) {
      this._dayID = dayID as number;
    } else {
      const current_date = new Date();
      const epocDate = new Date(0);
      const res = Math.abs(current_date.getTime() - epocDate.getTime()) / 1000;
      this._dayID = Math.floor(res / 86400) + 719522;
    }
  }

  constructor() {}

  ngOnInit(): void {}

}
