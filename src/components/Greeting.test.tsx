import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("should render the user's name correctly", () => {
    render(<Greeting name="Badr" />);

    expect(screen.getByText("Hello, Badr!")).toBeInTheDocument();
  });

  test("should render a different name correctly", () => {
    render(<Greeting name="Ahmed" />);

    expect(screen.getByText("Hello, Ahmed!")).toBeInTheDocument();
  });
});
