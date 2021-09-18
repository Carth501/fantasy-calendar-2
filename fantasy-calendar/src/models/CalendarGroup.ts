import { Calendar } from './Calendar';
import { Incident } from './Events/Incident';

export interface CalendarGroup {
  calendars: Calendar[];
  dayID?: number;
  incidentList: Incident[];
}
