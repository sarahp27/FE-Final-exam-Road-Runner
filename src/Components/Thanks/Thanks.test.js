import { render, screen,fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {Thanks}  from "./Thanks";

describe("Thanks Page", () => {
  test("Thanks Text", () => {
    render(<MemoryRouter><Thanks/></MemoryRouter>);
    // expect(screen.getByText(/Thank You for Choosing Us/i)).toBeInTheDocument();
    const thanksText = screen.getByText(/Thank You for Choosing Us/i);
    expect(thanksText).toBeInTheDocument();
  });

  test("Start Over Button", () => {
    render(<MemoryRouter><Thanks/></MemoryRouter>);
    // expect(screen.getByText(/Thank You for Choosing Us/i)).toBeInTheDocument();
    const thanksBtn = screen.getByText("Start Over");
    expect(thanksBtn).toBeInTheDocument();
  });
});

