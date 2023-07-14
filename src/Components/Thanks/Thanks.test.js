import { render, screen } from "@testing-library/react";
import {Thanks} from "./Thanks";

describe("Thanks Page", () => {
  test("Thanks", () => {
    render(<Thanks/>);
    const thanksText = screen.getByText(/ Thank You for Choosing Us/i);
    expect(thanksText).toBeInTheDocument();
  });
});
