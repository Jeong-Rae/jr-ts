const { ceil, floor } = Math;

import { clamp } from './clamp';
import { lerp } from './lerp';

export type Percentile = number;

/**
 * 선형 보간을 이용한 퍼센타일을 계산한다.
 * 입력 배열은 사전에 정렬되어 있어야 한다.
 * @param sortedValues 정렬된 값의 배열
 * @param p 퍼센타일 (0 ~ 100)
 * 
 * @example
 * const values = [10, 20, 30, 40, 50].sort((a, b) => a - b);
 * percentile(values, 90); // -> 50
 * 
 * @example
 * percentile([1, 2, 3, 4], 50); // -> 2.5
 */
export function percentile(sortedValues: number[], p: Percentile): number {
  if (sortedValues.length === 0) return 0;
  if (sortedValues.length === 1) return sortedValues[0];

  const clampedP = clamp(p, 0, 100);

  const position = (clampedP / 100) * (sortedValues.length - 1);
  const lowerIndex = floor(position);
  const upperIndex = ceil(position);

  if (lowerIndex === upperIndex) {
    return sortedValues[lowerIndex];
  }

  const lowerValue = sortedValues[lowerIndex];
  const upperValue = sortedValues[upperIndex];
  const t = position - lowerIndex;

  return lerp(lowerValue, upperValue, t);
}
