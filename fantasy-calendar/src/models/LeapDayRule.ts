export interface LeapDayRule {
  delta: number;
  offset: number;
  frequency: number; // 0 < x < 1
}
