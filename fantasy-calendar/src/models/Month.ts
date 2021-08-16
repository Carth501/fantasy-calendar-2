import { LeapDayRule } from './LeapDayRule';

export interface Month {
  monthName: string;
  daysInMonth: number;
  leapDayRules: LeapDayRule[];
}
