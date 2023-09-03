/**
 *
 * @param obj
 * @returns Array
 * @description Returns an array of the object's keys as const for typesafety
 */
export function keys<T extends Record<string, unknown>>(
  obj: T
): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

/**
 *
 * @param obj
 * @returns Array
 * @description Returns an array of the object's values as const for typesafety
 */
export function values<T extends Record<string, any>>(
  obj: T
): Array<T[keyof T]> {
  return Object.values(obj) as Array<T[keyof T]>;
}

/**
 * @param obj
 * @returns Array
 * @description Returns an array of the object's entries as const for typesafety
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * entries(obj); // type: [ ['a', 1], ['b', 2], ['c', 3] ]
 */
export function entries<T extends Record<string, any>>(
  obj: T
): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}
