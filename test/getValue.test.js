const getValue = require('../source/getValue');

test("object assignment", () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

