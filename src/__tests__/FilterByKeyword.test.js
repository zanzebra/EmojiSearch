import { filterByKeywords } from "../utils";

describe("Filter function", () => {
  test("should filter by keywords provided", () => {
    const input = [
      {
        title: "Bird",
        symbol: "🐦",
        keywords: "bird wildlife animal animal",
      },
      {
        title: "Baby Chick",
        symbol: "🐤",
        keywords: "baby chick animal animal chicken chicken",
      },
      {
        title: "Hatching Chick",
        symbol: "🐣",
        keywords: "hatching chick animal animal chicken chicken",
      },
    ];

    const output = [
      {
        title: "Bird",
        symbol: "🐦",
        keywords: "bird wildlife animal animal",
      },
    ];

    expect(filterByKeywords(input, "bird wildlife animal animal")).toEqual(
      output
    );
  });
});
