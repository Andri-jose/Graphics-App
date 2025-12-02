import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Mock the CSS imports
jest.mock('./styles.css', () => ({}));

test('renders App component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Home/i)).toBeInTheDocument();
});
