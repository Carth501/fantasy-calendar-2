export interface Day {
  dayOfMonth: number;
  dayID: number;
  events: Event[];
  selectedDay: boolean;
  inActiveMonth: boolean;
  i?: number;
  x?: number;
  y?: number;
  z?: number;
  dow?: number;
}
