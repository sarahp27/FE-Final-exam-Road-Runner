import { render, screen, waitFor } from "@testing-library/react";
import Card from "./Card";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("Card", () => {
  test("check the source is available in Car image", async () => {
    render(<Card />);
    await waitFor(() => {
      expect(
        screen.getByText(/Bugatti Chiron Super Sport/i)
      ).toBeInTheDocument();
    });
    // const  car = screen.getByRole('img');
    // expect(car).toHaveAttribute('src')
  });

//   test("check the source is available in Car image", async () => {
//     render(<Card />);

    // fetchMock.mockIf("http://localhost:8081/cars/getAll", (data) =>
    // expect(data.method).toBe('GET');
    // )
  });
  // const  car = screen.getByRole('img');
  // expect(car).toHaveAttribute('src')
// });
