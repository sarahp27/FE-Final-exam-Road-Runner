import { render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {Form}  from "./Form";

describe("Rental Form Page", () => {
  test("Form heading", () => {
    render(<MemoryRouter><Form/></MemoryRouter>);
    const headerText = screen.getByText("Confirm your Car");
    expect(headerText).toBeInTheDocument();
  });

  test("renders checkout buttons", () => {
    render(<MemoryRouter><Form/></MemoryRouter>);
    const checkout = screen.getByRole("button", { name: "checkout"});
    expect(checkout).toHaveTextContent("Checkout");
  });

  test("renders choose different car", () => {
    render(<MemoryRouter><Form/></MemoryRouter>);
    const checkout = screen.getByRole("button", { name: "car" });
    expect(checkout).toHaveTextContent("Choose a different car");
  });

});
