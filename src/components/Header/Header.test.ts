import Header from './Header';

const add = (x: number, y: number): number => x + y;

test('<Header />', () => {
  const val: number = add(1, 2);
  expect(val).toBe(3);
});
