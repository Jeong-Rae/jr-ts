// Re-export all math functions and types
export { clamp } from './math/clamp';
export { lerp } from './math/lerp';
export { mean } from './math/mean';
export { median } from './math/median';
export { variance } from './math/variance';
export { percentile, type Percentile } from './math/percentile';
export { modulo, type ModuloOnZero, type ModuloOptions } from './math/modulo';

// Re-export all function utilities
export { swap } from './function/swap';

// Also export namespace for convenience
export * as math from './math';
export * as fn from './function';