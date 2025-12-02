import React from "react";
import { BrowserRouter } from "react-router";
import { render } from "@testing-library/react";
import Contact from "./contact";

test('renders Contact component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );

  expect(document.title.includes('Contact')).toBe(true);
  expect(getByText(/Contact Us/i)).toBeInTheDocument();
});