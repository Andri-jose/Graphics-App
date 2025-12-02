import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./dashboard";

test('renders Dashboard component', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/My Dashboard/i)).toBeInTheDocument();
});