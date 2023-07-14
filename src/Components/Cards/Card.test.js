import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";
import fetchMock from "jest-fetch-mock";
import { Router } from "react-router-dom";

fetchMock.enableMocks();

describe("Card", () => {
  test("check the source is available in Car image", async () => {
    render(<MemoryRouter><Card/></MemoryRouter>);
    await waitFor(() => {
      expect(
        screen.getByText(/Bugatti Chiron Super Sport/i)
      ).toBeInTheDocument();
    });
    // const  car = screen.getByRole('img');
    // expect(car).toHaveAttribute('src')
  });


  scope = mock('http://api.example.com')
                .post('/cars', {
                  id:1,
                  name: 'user',
                  image: 'www.image.com',
                  shortDescription: 'Unleash unrivaled power and elegance wi',
                  longDesc: "ijfi9vioed fijew9 fei9 fh",
                  price: 90
                })

  test("fetch checking", async () => {
    fetchMock.mock("http://api.example.com", 200);
    // const res = await fetch('http://localhost:8081/cars/getAll');
    // assert(res.ok);
    // fetchMock.restore();
    return await fetch("http://api.example.com").then((response) => {
      response
        .json()
        .then((data) => expect(data).toBe(/user/i));
    });
  });

 
});
