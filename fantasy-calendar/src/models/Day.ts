export interface Day {
  dayOfMonth: number;
  dayID: number;
  events: Event[];
  selectedDay: boolean;
  inActiveMonth: boolean;
}
