import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import BaseLayout from "./components/BaseLayout";

test("renders learn react link", () => {
  const { getByText } = render(<BaseLayout />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
