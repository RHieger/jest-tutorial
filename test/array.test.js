const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

test('the shopping list does not have broccoli in it', () => {
  expect(shoppingList).not.toContain('broccoli');
});

test('the shopping list first item is diapers', () => {
  expect(shoppingList[0]).toBe('diapers');
});

test('the fourth shopping list item is paper towels', () => {
  expect(shoppingList[3]).toBe('paper towels');
});

test('the shopping list has 5 items', () => {
  expect(shoppingList).toHaveLength(5);
});