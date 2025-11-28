import { describe, it, expect } from 'vitest';
import { percentile } from './percentile';

describe('percentile', () => {
  it('90 퍼센타일을 계산한다', () => {
    const values = [10, 20, 30, 40, 50];
    expect(percentile(values, 90)).toBe(50);
  });

  it('50 퍼센타일(중앙값)을 계산한다', () => {
    expect(percentile([1, 2, 3, 4], 50)).toBe(2.5);
  });

  it('빈 배열에 대해 0을 반환한다', () => {
    expect(percentile([], 50)).toBe(0);
  });

  it('단일 요소 배열을 반환한다', () => {
    expect(percentile([5], 50)).toBe(5);
  });

  it('퍼센타일을 [0, 100] 범위로 제한한다', () => {
    expect(percentile([1, 2, 3, 4, 5], -10)).toBe(1);
    expect(percentile([1, 2, 3, 4, 5], 110)).toBe(5);
  });

  it('0 퍼센타일(최솟값)을 계산한다', () => {
    expect(percentile([1, 2, 3, 4, 5], 0)).toBe(1);
  });

  it('100 퍼센타일(최댓값)을 계산한다', () => {
    expect(percentile([1, 2, 3, 4, 5], 100)).toBe(5);
  });

  it('값들 사이를 보간한다', () => {
    expect(percentile([0, 100], 25)).toBe(25);
    expect(percentile([0, 100], 75)).toBe(75);
  });
});
