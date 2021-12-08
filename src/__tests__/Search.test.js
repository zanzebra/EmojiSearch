import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Search } from "../components";

test("check input render", async () => {
  render(<Search />);
  expect(screen.getByPlaceholderText("Happy")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});

describe("input value", () => {
  it("should updates on change", async () => {
    const { queryByPlaceholderText } = render(<Search />);
    const searchInput = queryByPlaceholderText("Happy");
    await fireEvent.change(searchInput, { target: { value: "Melon" } });
    expect(searchInput.value).toBe("Melon");
  });
});
