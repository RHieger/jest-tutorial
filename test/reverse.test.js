import { reverse } from "../source/reverse";

describe("reverse", () => {

  describe("when the string is empty", () => {

    it("returns an empty string", () => {
      expect(reverse("")).toEqual("");
    });
  });

  describe("when the string only contains one letter", () => {

    it("returns the letter unmodified", () => {
      expect(reverse("a")).toEqual("a");
      expect(reverse("z")).toEqual("z");
    });
  });

  describe("when the string contains multiple characters", () => {

    it("returns the characters in reverse order", () => {
      expect(reverse("abc")).toEqual("cba");
    });
  });

  describe("when the string contains symbols", () => {

    it("returns the characters in reverse order", () => {
      expect(reverse("$%^&")).toEqual("&^%$");
    });
  });

  describe("when the string contains emojis", () => {

    it("returns the characters in reverse order", () => {
      expect(reverse("😎🤔😵")).toEqual("😵🤔😎");
    });
  });
});
