import { describe, it, expect } from 'vitest';
import { median } from './median';

describe('median', () => {
  it('홀수 개 요소의 중앙값을 반환한다', () => {
    expect(median([1, 3, 2])).toBe(2);
  });

  it('짝수 개 요소의 중앙값을 반환한다', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });

  it('빈 배열에 대해 0을 반환한다', () => {
    expect(median([])).toBe(0);
  });

  it('단일 값을 처리한다', () => {
    expect(median([5])).toBe(5);
  });

  it('정렬되지 않은 배열을 처리한다', () => {
    expect(median([5, 2, 8, 1, 9])).toBe(5);
  });

  it('음수를 처리한다', () => {
    expect(median([-3, -1, -2])).toBe(-2);
  });
});
