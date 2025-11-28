import { describe, it, expect } from 'vitest';
import { swap } from './swap';

describe('swap', () => {
  it('두 숫자를 교환한다', () => {
    expect(swap(1, 2)).toEqual([2, 1]);
  });

  it('음수를 교환한다', () => {
    expect(swap(-5, 10)).toEqual([10, -5]);
  });

  it('0과 0이 아닌 수를 교환한다', () => {
    expect(swap(0, 5)).toEqual([5, 0]);
  });

  it('같은 숫자를 교환한다', () => {
    expect(swap(5, 5)).toEqual([5, 5]);
  });
});
