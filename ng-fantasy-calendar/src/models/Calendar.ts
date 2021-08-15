import { Month } from "./Month";

export interface Calendar {
    daysPerYear: number;
    months: Month[];
}