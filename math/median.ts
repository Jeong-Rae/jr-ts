const { floor } = Math;

/**
 * 중앙값을 계산한다.
 * @param values 값의 배열
 * 
 * @example
 * median([1, 3, 2]); // -> 2
 * 
 * @example
 * median([1, 2, 3, 4]); // -> 2.5
 */
export function median(values: number[]): number {
  if (values.length === 0) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}
