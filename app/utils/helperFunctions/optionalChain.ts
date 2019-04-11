/**
 * Optional chaining helper for use in typescript
 */
export default (value: any, ...fields: any[]) =>
  fields.reduce((a = {}, b) => (typeof b === 'function' ? b(a) : a[b]), value);
