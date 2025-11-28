import { describe, it, expect } from 'vitest';
import { lerp } from './lerp';

describe('lerp', () => {
  it('비율이 0일 때 시작 값을 반환한다', () => {
    expect(lerp(0, 10, 0)).toBe(0);
  });

  it('비율이 1일 때 끝 값을 반환한다', () => {
    expect(lerp(0, 10, 1)).toBe(10);
  });

  it('비율이 0.5일 때 중간 값을 반환한다', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });

  it('음수 사이를 보간한다', () => {
    expect(lerp(-10, 10, 0.5)).toBe(0);
  });

  it('임의의 비율 값에 대해 작동한다', () => {
    expect(lerp(0, 100, 0.25)).toBe(25);
    expect(lerp(0, 100, 0.75)).toBe(75);
  });
});
