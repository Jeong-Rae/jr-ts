import { describe, it, expect } from 'vitest';
import { clamp } from './clamp';

describe('clamp', () => {
  it('값이 범위 내에 있으면 그 값을 반환한다', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('값이 최솟값보다 작으면 최솟값을 반환한다', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  it('값이 최댓값보다 크면 최댓값을 반환한다', () => {
    expect(clamp(999, 0, 10)).toBe(10);
  });

  it('최솟값과 최댓값이 바뀌어 있으면 교환하여 처리한다', () => {
    expect(clamp(5, 10, 0)).toBe(5);
    expect(clamp(-1, 10, 0)).toBe(0);
    expect(clamp(999, 10, 0)).toBe(10);
  });
});
