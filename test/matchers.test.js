// Matcher: value

const greeting = () => {
  let message = "Hello, World!";
  return message;
};

test("returned message is Hello, World!", () => {
  expect(greeting()).toBe("Hello, World!");
});

// Matcher: not value

const greeting2 = () => {
  let message = "Goodbye, World!";
  return message;
}

test("returned message is not Hello, World!", () => {
  expect(greeting2()).not.toBe("Hello, World!");
});

// Matcher: toContain

const peripherals = [
  "2TB external SSD",
  "6TB USB C HD portable",
  "SD Card Reader",
  "digitizer pad",
  "external blu-ray drive",
  "4K secondary display",
  "64GB USB2.0 Flash Drive",
  "128GB USB3 Flash Drive",
  "wireless bluetooth headseat",
  "wireless bluetooth speaker"
];

const groceries = [
  "1 dozen eggs",
  "milk",
  "2 boxes golden raisins",
  "2 containers whipped butter",
  "oatmeal",
  "chick pea paella",
  "sparkling ice drinks",
  "fruit juice",
  "2 lbs. seedless grapes",
  "2 lb. navel oranges",
  "10 bananas",
  "1 bunch broccoli",
  "2 boxes no sugar added crunchy Klondike bars",
  "2 cannisters ground French Vanilla Coffee"
];

test("the peripherals list contains 6TB USB C HD portable", () => {
  expect(peripherals).toContain("6TB USB C HD portable");
});

// Matcher: not toContain

test("the peripherals list does not contain HD Web Cam", () => {
  expect(peripherals).not.toContain("HD Web Cam");
});

// Matcher: toHaveLength

test("the peripherals list has 10 elements", () => {
  expect(peripherals).toHaveLength(10);
});

test("groceries list has 14 elements", () => {
  expect(groceries).toHaveLength(14);
});

// Matcher: not toHaveLength

test("the peripherals list does not have 100 elements", () => {
  expect(peripherals).not.toHaveLength(100);
});

test("groceries list does not have 3 elements", () => {
  expect(groceries).not.toHaveLength(3);
});

// Matcher: toBeGreaterThan

const secondsPerDay = () => {
  return 24 * 60 * 60;
};

test("seconds per day are greater than 1440", () => {
  expect(secondsPerDay()).toBeGreaterThan(1440);
});

// Matcher not.toBeGreaterThan

test("seconds per day are not greater than 86401", () => {
  expect(secondsPerDay()).not.toBeGreaterThan(86400);
});

// Matcher: toBeGreaterThanOrEqual

test("seconds per day are greater than or equal to 86400", () => {
  expect(secondsPerDay()).toBeGreaterThanOrEqual(86400);
});

// Matcher: not.toBeGreaterThanOrEqual

test("seconds per day are not greater than or equal to 86401", () => {
  expect(secondsPerDay()).not.toBeGreaterThanOrEqual(86401);
});

// Matcher: toBeLessThan

const millisecondsPerYear = () => {
  return (86400 * 1000) * 365.25;
};

test("milliseconds per year are less than 50 billion", () => {
  expect(millisecondsPerYear()).toBeLessThan(50000000000);
});

// Matcher: not.toBeLessThan

test("milliseconds per year are not less than 30 billion", () => {
  expect(millisecondsPerYear()).not.toBeLessThan(30000000000);
});

// Matcher: toBe (number)

test("milliseconds per year are 31,557,600,000", () => {
  expect(millisecondsPerYear()).toBe(31557600000);
});

// Matcher not.toBe (number)

test("milliseconds per year are not 32,000,000,000", () => {
  expect(millisecondsPerYear()).not.toBe(32000000000);
});