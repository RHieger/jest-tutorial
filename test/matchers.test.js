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

// Matcher: toBeLessThanOrEqual

test("milliseconds per year are less than or equal to 31,557,601,000",
  () => {
    expect(millisecondsPerYear()).toBeLessThanOrEqual(31557601000);
  });

// Matcher: not.toBeLessThanOrEqual

test(`milliseconds per year are not less than
    or equal to 31,557,599,000`, () => {
  expect(millisecondsPerYear()).not.toBeLessThanOrEqual(31557599000);
});

// Matcher: toContainEqual(item)

const people = [
  { name: "Joe Smith", age: 32, sex: "male" },
  { name: "Jo Green", age: 28, sex: "female" },
  { name: "Jennifer James", age: 35, sex: "female" },
  { name: "Robert Roth", age: 52, sex: "male" }
];

test("name is Jennifer James and sex is not male", () => {
  const myPerson = { name: "Jennifer James", age: 35, sex: "female" };
  expect(people).toContainEqual(myPerson);
});

// Matcher: toEqual

const can1 = {
  contents: "kidney beans",
  ounces: 12
};

const can2 = {
  contents: "kidney beans",
  ounces: 12
};

const can3 = {
  contents: "lentils",
  ounces: 16
};

const can4 = {
  contents: "fava beans",
  ounces: 12
};

describe("the canned legumes", () => {
  test("have the same ingredients and ounces per can", () => {
    expect(can2).toEqual(can1);
  });
  test("have different ingredients and number of ounces", () => {
    expect(can4).not.toEqual(can3);
  });
});

// Matcher: toBeNull

const message = () => {
  return null;
};

const message2 = () => {
  return "This message is not null.";
}

describe("this object", () => {
  test("is null", () => {
    expect(message()).toBeNull();
  });
  test("is not null", () => {
    expect(message2()).not.toBeNull();
  });
});

// Matchers: toBeUndefined/not.toBeUndefined

describe("my favorite drink", () => {
  const drink1 = undefined;
  const drink2 = "Jameson Whiskey";
  test("is undefined", () => {
    expect(drink1).toBeUndefined();
  });
  test("is Jameson Whiskey", () => {
    expect(drink2).not.toBeUndefined();
  });
});

// Matchers: toBeNaN

const num1 = NaN;
const num2 = 365.25;

describe("NaN", () => {
  test("num1 is NaN", () => {
    expect(num1).toBeNaN();
  });
  test("num2 is not NaN", () => {
    expect(num2).not.toBeNaN();
  });
});

// Matchers: toMatchObject

const car1 = {
  make: "Honda",
  model: "Accord",
  type: "Hybrid",
  year: 2020
};

const car2 = {
  make: "Toyota",
  model: "Prius",
  type: "Hybrid",
  year: 2018
};

const car3 = {
  make: "Honda",
  model: "Accord",
  type: "Hybrid",
  year: 2020
};

describe("toMatchObject appled to 3 objects", () => {
  test("both car1 and car3 meet my requirements", () => {
    expect(car3).toMatchObject(car1);
  });
  test("car2 and car3 are different cars", () => {
    expect(car3).not.toMatchObject(car2);
  });
});

// Matchers: toBeDefined/not.toBeDefined

describe("toBeDefined", () => {
  const workDays = undefined;
  const myWorkDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday"
  ];
  test("myWorkDays are defined", () => {
    expect(myWorkDays).toBeDefined();
  });
  test("workDays is not defined", () => {
    expect(workDays).not.toBeDefined();
  });
});

// Matchers: toHaveProperty/not.toHaveProperty

const macBookPro1 = {
  size: "13 inches",
  displayType: "Retina/True Tone Technology",
  processor: "Intel i7 quad core 2.3GHz",
  turboRating: "4.1GHz",
  gigsOfRAM: 32,
  storage: "1TB SSD",
  gpu: "Intel Iris Plus Graphics 32GB RAM"
};

const macBookPro2 = {
  size: "16 inches",
  displayType: "Retina/True Tone Technology",
  processor: "Intel i9 8 core 2.4GHz",
  turboRating: "5.0GHz",
  gigsOfRAM: 64,
  storage: "2TB SSD",
  gpu: "AMD Radeon Pro 5500M 8GB GDDR6 RAM"
};

describe("toHaveProperty", () => {
  test("macBookPro2 has 16 inch screen", () => {
    expect(macBookPro2).toHaveProperty("size", "16 inches");
  });
  test("macBookPro2 has Retina/True Tone technology display", () => {
    expect(macBookPro2)
      .toHaveProperty("displayType", "Retina/True Tone Technology");
  });
  test("macBookPro2 has Intel i9 8 core 2.4GHz processor",
    () => {
      expect(macBookPro2)
        .toHaveProperty("processor", "Intel i9 8 core 2.4GHz");
    });
  test("macBookPro2 has processor turbo rating of 5.0GHz",
    () => {
      expect(macBookPro2).toHaveProperty("turboRating", "5.0GHz");
    });
  test("macBookPro2 has 64GB of RAM", () => {
    expect(macBookPro2).toHaveProperty("gigsOfRAM", 64);
  });
  test("macBookPro2 has a 2TB SSD", () => {
    expect(macBookPro2).toHaveProperty("storage", "2TB SSD");
  });
  test(`macBookPro2 has an AMD Radeon Pro 5500M
      with 8GB GDDR6 RAM`, () => {
    expect(macBookPro2)
      .toHaveProperty("gpu", "AMD Radeon Pro 5500M 8GB GDDR6 RAM");
  });
});

describe("not.toHaveProperty", () => {
  test("macBookPro1 does not have 16 inch display", () => {
    expect(macBookPro1).not.toHaveProperty("size", "16 inches");
  });
  test("macBookPro1 does not have Intel i9 8 core 2.4GHz processor",
    () => {
      expect(macBookPro1).not
        .toHaveProperty(
          "processor", "Intel i9 8 core 2.4GHz processor"
        );
    });
  test(`macBookPro1 does not have processor turbo rating
      of 5.0GHz`, () => {
    expect(macBookPro1).not
      .toHaveProperty("turboRating", "5.0GHz");
  });
  test("macBookPro1 does not have 64GB of RAM", () => {
    expect(macBookPro1).not.toHaveProperty("gigsOfRAM", 64);
  });
  test("macBookPro1 does not have a 2TB SSD", () => {
    expect(macBookPro1).not.toHaveProperty("storage", "2TB SSD");
  });
  test(`macBookPro1 does not have an AMD Radeon Pro 5500M
      with 8GB GDDR6 RAM`, () => {
    expect(macBookPro1).not
      .toHaveProperty("gpu", "AMD Radeon Pro 5500M 8GB GDDR6 RAM");
  });
});
