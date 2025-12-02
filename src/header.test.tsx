import React from "react";
import { BrowserRouter } from "react-router";
import { render } from "@testing-library/react";
import Header from "./header";

test('renders Header component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/Articles/i)).toBeInTheDocument();
  expect(getByText(/Contact/i)).toBeInTheDocument();
  expect(getByText(/About/i)).toBeInTheDocument();
});