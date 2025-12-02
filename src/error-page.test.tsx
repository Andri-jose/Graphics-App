import React from "react";
import { BrowserRouter } from "react-router";
import { render } from "@testing-library/react";
import ErrorPage from "./error-page";

test('renders ErrorPage component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <ErrorPage />
    </BrowserRouter>
  );
  expect(getByText(/404/i)).toBeInTheDocument();
  expect(getByText(/Page not found/i)).toBeInTheDocument();
});