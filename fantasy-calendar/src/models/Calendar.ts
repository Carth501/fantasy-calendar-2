import { Month } from './Month';

export interface Calendar {
  title: string;
  daysOfWeek: string[];
  dowOffset: number;
  offsetDayID: number;
  months: Month[];
}
