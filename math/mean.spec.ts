import { describe, it, expect } from 'vitest';
import { mean } from './mean';

describe('mean', () => {
  it('산술평균을 계산한다', () => {
    expect(mean([1, 2, 3, 4])).toBe(2.5);
  });

  it('빈 배열에 대해 0을 반환한다', () => {
    expect(mean([])).toBe(0);
  });

  it('단일 값을 처리한다', () => {
    expect(mean([5])).toBe(5);
  });

  it('음수를 처리한다', () => {
    expect(mean([-1, -2, -3])).toBe(-2);
  });

  it('양수와 음수가 섞여 있을 때 처리한다', () => {
    expect(mean([-5, 5])).toBe(0);
  });
});
