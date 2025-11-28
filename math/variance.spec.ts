import { describe, it, expect } from 'vitest';
import { variance } from './variance';

describe('variance', () => {
  it('분산을 올바르게 계산한다', () => {
    expect(variance([1, 2, 3])).toBeCloseTo(0.666666, 5);
  });

  it('빈 배열에 대해 0을 반환한다', () => {
    expect(variance([])).toBe(0);
  });

  it('모든 값이 같으면 0을 반환한다', () => {
    expect(variance([5, 5, 5])).toBe(0);
  });

  it('단일 값을 처리한다', () => {
    expect(variance([10])).toBe(0);
  });

  it('음수를 처리한다', () => {
    expect(variance([-1, -2, -3])).toBeCloseTo(0.666666, 5);
  });

  it('양수와 음수가 섞여 있을 때 처리한다', () => {
    expect(variance([-2, -1, 0, 1, 2])).toBe(2);
  });
});
