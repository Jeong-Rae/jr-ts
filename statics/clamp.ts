import { swap } from '../function/swap';

/**
 * 주어진 값이 [min, max] 범위를 벗어나지 않도록 clamp 한다.
 * @param value 대상값
 * @param min 최솟값
 * @param max 최댓값
 * 
 * @example
 * clamp(5, 0, 10); // -> 5
 * clamp(-1, 0, 10);  // -> 0
 * clamp(999, 0, 10); // -> 10
 */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) {
    [min, max] = swap(min, max);
  }

  if (value < min) return min;
  if (value > max) return max;
  return value;
}
