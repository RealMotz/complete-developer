import { sum } from "../helpers/sum";

describe("the sum function", () => {
  test("of 1 and 2", () => {
    expect(sum([1,2])).toBe(3);
  });

  test("of 1 and 2 ", () => {
    expect(sum([10,-5])).toBe(5);
  });
});
