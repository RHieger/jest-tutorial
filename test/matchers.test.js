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

test("the peripherals list contains 6TB USB C HD portable", () => {
  expect(peripherals).toContain("6TB USB C HD portable");
});

// Matcher: not toContain

test("the peripherals list does not contain HD Web Cam", () => {
  expect(peripherals).not.toContain("HD Web Cam");
});