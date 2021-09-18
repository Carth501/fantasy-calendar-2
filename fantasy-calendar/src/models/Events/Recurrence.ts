import { Event } from './Event';
import { EventPattern } from './EventPattern'

export interface Recurrence extends Event {
  pattern: EventPattern;
  dayID?: number;
  dayIDInterval?: number;
  dayOfYear?: number;
  monthOfYear?: number;
  dayOfMonth?: number;
  weekOfMonth?: number;
  dayOfWeek?: number;
  count?: number;
  recurrenceSubject?: Recurrence;
}
