export interface Recurrence {
    frequency: number; // 0 < x <= 1
    title: string;
    description: string;
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
