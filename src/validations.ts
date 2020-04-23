export const containsOnly0And1 = (s: string) => {
  return s.split('').every(c => c === '0' || c === '1');
}
