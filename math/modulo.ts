export type ModuloOnZero = 'throw' | 'nan' | 'undefined';

export type ModuloOptions = {
  onZero?: ModuloOnZero;
};

/**
 * 수학적 modulo 연산을 수행한다.
 * divisor가 0일 때의 동작을 옵션으로 제어할 수 있다.
 *
 * @param value 대상값
 * @param divisor 나누는 값
 * @param options divisor = 0일 때의 처리 전략
 *
 * @example
 * modulo(5, 3); // -> 2
 * modulo(-1, 3); // -> 2
 * modulo(5, 0); // -> NaN
 * modulo(5, 0, { onZero: 'undefined' }); // -> undefined
 * modulo(5, 0, { onZero: 'throw' }); // -> error
 */
export function modulo(
  value: number,
  divisor: number,
  options: ModuloOptions = {}
): number | undefined {
  const onZero = options.onZero ?? 'nan';

  if (divisor === 0) {
    switch (onZero) {
      case 'throw':
        throw new Error('0으로는 나눌 수 없습니다.');
      case 'undefined':
        return undefined;
      case 'nan':
      default:
        return NaN;
    }
  }

  const result = value % divisor;
  return result < 0 ? result + divisor : result;
}
