import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from 'src/models/Calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() calendars: Calendar[];
  @Input() dayID: number;

  constructor() { }

  ngOnInit(): void {
  }

}
