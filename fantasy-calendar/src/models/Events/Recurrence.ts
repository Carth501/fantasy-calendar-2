export interface Recurrence extends Event {
  frequency: number; // 0 < x <= 1
  pattern: EventPattern;
  dayID: number;
  dayOfYear: number;
  monthOfYear: number;
  dayOfMonth: number;
  weekOfMonth: number;
  dayOfWeek: number;
  count: number;
  recurrenceSubject: Recurrence;
}
