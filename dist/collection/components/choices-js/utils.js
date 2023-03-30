/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
export function filterObject(obj, fn) {
  return Object.keys(obj).reduce((accum, property) => {
    const value = obj[property];
    if (fn(value, property, obj)) {
      accum[property] = value;
    }
    return accum;
  }, {});
}
/**
 * Check if given parameter is not undefined.
 *
 * @param value - value to check.
 * @returns whether the value is defined.
 */
export function isDefined(value) {
  return typeof value !== 'undefined';
}
/**
 * Returns the list of values.
 *
 * @param value - Value or list of values.
 * @returns List of values.
 */
export function getValues(value) {
  return typeof value !== 'undefined'
    ? [].concat(typeof value === 'string' ? value.split(',') : value)
    : [];
}
//# sourceMappingURL=utils.js.map
