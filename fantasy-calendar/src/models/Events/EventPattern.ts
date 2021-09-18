export enum EventPattern {
  AbsouluteDayID, // day X
  RelativeToYear, // day X of every year
  RelativeToMonth, // day X of a month of every year
  RelativeToWeek, // day X of a week of a month of every year
  DOWCount, // a count of a day of the week
  RelativeToRecurrence, // a number of days before or after another recurring event
}
