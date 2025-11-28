const { pow } = Math;

import { mean } from './mean';

/**
 * 분산을 계산한다.
 * @param values 값의 배열
 * 
 * @example
 * variance([1, 2, 3]); // -> 0.666...
 */
export function variance(values: number[]): number {
  if (values.length === 0) return 0;

  const avg = mean(values);
  const squaredDiffSum = values.reduce((acc, v) => acc + pow(v - avg, 2), 0);
  return squaredDiffSum / values.length;
}
