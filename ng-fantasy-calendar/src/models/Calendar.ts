import { Month } from "./Month";

export interface Calendar {
    title: string;
    daysOfWeek: string[];
    months: Month[];
}