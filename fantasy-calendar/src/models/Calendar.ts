import { Month } from './Month';

export interface Calendar {
  title: string;
  daysOfWeek: string[];
  dowOffset: number;
  months: Month[];
}
