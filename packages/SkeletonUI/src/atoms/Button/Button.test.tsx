import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  it("renders correctly", () => {
    render(<Button label="Example button" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
