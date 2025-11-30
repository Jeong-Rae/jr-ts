import { describe, it, expect } from 'vitest';
import { modulo } from './modulo';

describe('modulo', () => {
  it('양수 modulo가 정상 동작한다', () => {
    expect(modulo(5, 3)).toBe(2);
  });

  it('음수 modulo일 때 항상 0 이상 divisor 미만으로 반환한다', () => {
    expect(modulo(-1, 3)).toBe(2);
    expect(modulo(-4, 3)).toBe(2);
  });

  it('divisor가 value보다 크면 value 그대로 반환한다', () => {
    expect(modulo(2, 5)).toBe(2);
  });

  it('value가 divisor로 나누어떨어지면 0을 반환한다', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  it('divisor = 0일 때 기본값은 NaN을 반환한다', () => {
    expect(modulo(5, 0)).toBeNaN();
  });

  it('onZero = undefined 옵션을 주면 undefined를 반환한다', () => {
    expect(modulo(5, 0, { onZero: 'undefined' })).toBeUndefined();
  });

  it('onZero = throw 옵션을 주면 에러를 던진다', () => {
    expect(() => modulo(5, 0, { onZero: 'throw' })).toThrow();
  });
});
