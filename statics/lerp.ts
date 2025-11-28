/**
 * 두 값 사이를 선형 보간한다.
 * @param start 시작 값
 * @param end 끝 값
 * @param ratio 보간 비율 (0.0 ~ 1.0)
 * 
 * @example
 * lerp(0, 10, 0); // -> 0
 * lerp(0, 10, 0.5); // -> 5
 * lerp(0, 10, 1); // -> 10
 */
export function lerp(start: number, end: number, ratio: number): number {
  return start + (end - start) * ratio;
}
