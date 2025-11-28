/**
 * 산술평균을 계산한다.
 * @param values 값의 배열
 * 
 * @example
 * mean([1, 2, 3, 4]); // -> 2.5
 */
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, v) => acc + v, 0);
  return sum / values.length;
}
